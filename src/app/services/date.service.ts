import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import {hasI18nAttrs} from "@angular/compiler/src/render3/view/i18n/util";

@Injectable()
export class DateService {
  dateStream: Subject<Date> = new Subject();
  date: Date = lastDayOfMonth(new Date());

  constructor() {
    this.dateStream.subscribe(date => this.date = date);
  }

  getDate = () => this.date;

  switchMonth(direction: string): void {
    if (direction === 'back') {
      this.dateStream.next(new Date(this.date.getFullYear(), this.date.getMonth(), 0));
    } else {
      this.dateStream.next(new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0));
    }
  }
}
//test
