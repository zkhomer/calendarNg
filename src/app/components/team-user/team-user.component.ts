import { Component, OnInit, Input } from '@angular/core';
import isWeekend from 'date-fns/isWeekend';

import { RowUser } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { DateService } from '../../services/date.service';
import { StatisticService } from '../../services/statistic.service';
import { CellInfo } from '../../interface/day';
import { VacationService } from '../../services/vacation.service';
import { Vacation } from '../../interface/vacation';

@Component({
  selector: '[team-user]',
  templateUrl: './team-user.component.html',
  styleUrls: ['./team-user.component.scss'],
})
export class TeamUserComponent implements OnInit {
  @Input() userId: number;
  @Input() teamId: number;
  lastDayOfMonth: Date;
  user: RowUser;
  dayCells: CellInfo[] = [];
  vacationSum: number = 0;
  isVacation: boolean = false;
  team: string;

  constructor(
    private userService: UserService,
    private dateService: DateService,
    private statisticService: StatisticService,
    private vacationService: VacationService
  ) {}

  ngOnInit() {
    this.lastDayOfMonth = this.dateService.getDate();
    this.user = this.userService.getUserById(this.userId);
    this.dayCells = this.fillDayCells(this.userId, this.lastDayOfMonth);
    this.dateService.dateStrem.subscribe((date) => {
      this.vacationSum = 0;
      this.lastDayOfMonth = date;
      this.dayCells = this.fillDayCells(this.userId, this.lastDayOfMonth);
    });
  }

  fillDayCells(userId, lastDayOfMonth): CellInfo[] {
    const dayCells: CellInfo[] = [];
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const iDate: Date = new Date(
        lastDayOfMonth.getFullYear(),
        lastDayOfMonth.getMonth(),
        i
      );
      const cellInfo: CellInfo = this.getCellInfo(iDate);
      if (cellInfo.isVacation && !cellInfo.isWeekend) {
        this.statisticService.updateStatistic(i - 1);
      }
      dayCells.push(cellInfo);
    }
    return dayCells;
  }
  getCellInfo(date: Date): CellInfo {
    const cellInfo: CellInfo = {
      isWeekend: isWeekend(date),
      isVacation: this.setVacation(date),
      isUiStart: false,
      isUiEnd: false,
      isPaid: false,
      isTypeText: false,
      isLeftL: false,
      isLeftS: false,
    };

    return cellInfo;
  }

  setVacation(date: Date) {
    const vacations: Vacation[] = this.vacationService.getVacationsByUserId(
      this.userId
    );

    for (let i = 0; i < vacations.length; i++) {
      const vacationsArrayStart: string[] = vacations[i].startDate.split('.');
      const vacationsArrayEnd: string[] = vacations[i].endDate.split('.');

      const vacationDateStart: Date = new Date(
        Number(vacationsArrayStart[2]),
        Number(vacationsArrayStart[1]) - 1,
        Number(vacationsArrayStart[0])
      );
      const vacationDateEnd: Date = new Date(
        Number(vacationsArrayEnd[2]),
        Number(vacationsArrayEnd[1]) - 1,
        Number(vacationsArrayEnd[0])
      );

      if (
        date.getTime() >= vacationDateStart.getTime() &&
        date.getTime() <= vacationDateEnd.getTime()
      ) {
        this.vacationSum++;
        return true;
      }
    }

    return false;
  }

  getStyleClass(dayCell: CellInfo) {
    if (!dayCell.isVacation) return false;
    let resultVacationStyle: string = 'vacation' + (this.teamId % 4);
    return resultVacationStyle;
  }
}
