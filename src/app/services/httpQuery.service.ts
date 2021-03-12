import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {departmentTeams} from '../../inputData';
import {InputData} from '../interface/inputData';
import {TeamService} from './team.service';
import {UserService} from './user.service';
import {VacationService} from './vacation.service';
import {ModalWindowAndFormService} from './modalWindowAndForm.service';

@Injectable()
export class HttpQueryService {
    dataStream$: Subject<object> = new Subject();
    data: InputData;

    constructor(private teamService: TeamService,
                private userService: UserService,
                private vacationService: VacationService,
                private modalWindowAndFormService: ModalWindowAndFormService) {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify([departmentTeams]),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    this.data = json[0];
                    this.modalWindowAndFormService.setLoadingState(false);
                    this.teamService.setTeams(this.data.teams);
                    this.vacationService.setVacations(this.data.vacations);
                    this.userService.setUsers(this.data.users);
                    this.modalWindowAndFormService.updateState();
                    this.dataStream$.next();
                });
        }, 9000);
    }
}
