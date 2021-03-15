import { Component, Input, OnInit } from '@angular/core';

import { DateService } from '../../services/date.service';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { RowTeam } from '../../interface/team';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent implements OnInit {
  @Input() teamId: number;
  team: RowTeam;
  participants: number[];
  date: Date;
  isTeamUsersHide: boolean = false;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private dateService: DateService
  ) {}

  switchShevronButton(): void {
    this.isTeamUsersHide = !this.isTeamUsersHide;

    console.log(this.isTeamUsersHide);
  }

  ngOnInit() {
    this.date = this.dateService.getDate();
    this.dateService.dateStrem.subscribe((date) => {
      this.date = date;
    });
    this.team = this.teamService.getTeamById(this.teamId);
    this.participants = this.userService
      .getUsers()
      .reduce((accumulator, currentValue) => {
        if (currentValue.teamId === this.teamId) {
          accumulator.push(currentValue.id);
        }
        return accumulator;
      }, []);
  }
}
