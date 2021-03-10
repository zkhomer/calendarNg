import { Component, OnInit } from '@angular/core';
import {format} from 'date-fns';
import isWeekend from 'date-fns/isWeekend';
import {DateService} from '../../services/date.service';

interface Day {
  date: Date;
  isDayOff: boolean;
  dayName: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  currentMonthObj: Day[];
  currentMonthAsDate: Date;

  constructor(
    private dateService: DateService
  ) {
  }

  fillMonthObj(date: Date): Day[] {
    const newDate: Date = new Date(date);
    const currentMonthObj: Day[] = [];
    const daysInMonth = newDate.getDate();
    console.log(daysInMonth)
    for (let i = 1; i <= daysInMonth; i++) {
      const iDate: Date = new Date(newDate.getFullYear(), newDate.getMonth(), i);
      const day: Day = {
        date: iDate,
        isDayOff: isWeekend(iDate),
        dayName: format(iDate, 'iiiiii')
      };
      currentMonthObj.push(day);
    }
    return currentMonthObj;
  }

  ngOnInit() {
    this.currentMonthAsDate = this.dateService.getDate();
    this.currentMonthObj = this.fillMonthObj(this.dateService.getDate());
    this.dateService.dateStream.subscribe(date => {
    this.currentMonthAsDate = date;
    this.currentMonthObj = this.fillMonthObj(date);
    });
  }
}
