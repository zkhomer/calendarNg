import { Component, OnInit, Input } from '@angular/core';
import { RowUser } from '../../interface/user';
import isWeekend from 'date-fns/isWeekend';
import { UserService } from '../../services/user.service';
import { DateService } from '../../services/date.service';
import { StatisticService } from '../../services/statistic.service';
import { CellInfo } from '../../interface/day';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[team-user]',
  templateUrl: './team-user.component.html',
  styleUrls: ['./team-user.component.scss']
})
export class TeamUserComponent implements OnInit {
  @Input() userId: number;
  lastDayOfMonth: Date;
  user: RowUser;
  dayCells: CellInfo[] = [];
  vacationSum = 0;
  constructor(
    private userService: UserService,
    private dateService: DateService,
    private statisticService: StatisticService) { }

  ngOnInit() {
    this.lastDayOfMonth =  this.dateService.getDate();
    this.user = this.userService.getUserById(this.userId);
    this.dayCells = this.fillDayCells(this.userId, this.lastDayOfMonth);
    this.dateService.dateStrem.subscribe(date => {
      this.vacationSum = 0;
      this.lastDayOfMonth = date;
      this.dayCells = this.fillDayCells(this.userId , this.lastDayOfMonth);
    });
  }

  fillDayCells(userId, lastDayOfMonth): CellInfo[] {
    const dayCells: CellInfo[] = [];
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const iDate: Date = new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), i);
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
      isVacation: false,
      isUiStart: false,
      isUiEnd: false,
      isPaid: false,
      isTypeText: false,
      isLeftL: false,
      isLeftS: false
    };

    return cellInfo;
  }
}
