import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { HttpQueryService } from '../../services/httpQuery.service';
import { Day } from '../../interface/day';
import { RowTeam } from '../../interface/team';
import isWeekend from 'date-fns/isWeekend';
import { format } from 'date-fns';
import { TeamService } from '../../services/team.service';
import { ModalWindowAndFormService } from '../../services/modalWindowAndForm.service';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss'],
})
export class CalendarTableComponent implements OnInit {
  teamsList: RowTeam[];
  currentMonthAsDate: Date;
  currentMonthObj: Day[];

  constructor(
    private dateService: DateService,
    private httpService: HttpQueryService,
    private teamService: TeamService,
    private modalWindowAndFormService: ModalWindowAndFormService
  ) {}

  fillMonthObj(date: Date): Day[] {
    const newDate: Date = new Date(date);
    const currentMonthObj: Day[] = [];
    const daysInMonth = newDate.getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const iDate: Date = new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        i
      );
      const day: Day = {
        date: iDate,
        isDayOff: isWeekend(iDate),
        dayName: format(iDate, 'iiiiii'),
      };
      currentMonthObj.push(day);
    }
    return currentMonthObj;
  }

  showForm() {
    this.modalWindowAndFormService.showForm();
  }

  ngOnInit() {
    this.currentMonthAsDate = this.dateService.getDate();
    this.currentMonthObj = this.fillMonthObj(this.dateService.getDate());
    this.dateService.dateStrem.subscribe((date) => {
      this.currentMonthAsDate = date;
      this.currentMonthObj = this.fillMonthObj(date);
    });
    this.httpService.dataStream$.subscribe(() => {
      this.teamsList = this.teamService.getTeams();
    });
  }
}
