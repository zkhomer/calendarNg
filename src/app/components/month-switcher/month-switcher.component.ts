import {Component, OnInit} from '@angular/core';
import {DateService} from '../../services/date.service';
import format from 'date-fns/format';

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.scss']
})
export class MonthSwitcherComponent implements OnInit {
  currentMonth: string;
  currentYear: number;

  constructor(private dateService: DateService) {
  }

  ngOnInit() {
    this.currentMonth = format(this.dateService.getDate(), 'MMMM');
    this.currentYear = this.dateService.getDate().getFullYear();
    this.dateService.dateStream.subscribe(date => {
      this.currentMonth = format(date, 'MMMM');
      this.currentYear = this.dateService.getDate().getFullYear();
    });
  }

  switchMonth(direction: string): void {
    this.dateService.switchMonth(direction);
  }
}
