import {Vacation} from '../interface/vacation';
import {Injectable} from '@angular/core';

@Injectable()
export class VacationService {
  vacations: Vacation[];
  setVacations(vacations) {
    this.vacations = vacations;
  }
  formatInputDate(stringDate: string): Date {
    return new Date(
      parseInt(stringDate.slice(6, 10), 10),
      parseInt(stringDate.slice(3, 5), 10) - 1,
      parseInt(stringDate.slice(0, 2), 10)
    );
  }
  getVacationsByUserId(userId: number): Vacation[] {
    return this.vacations.filter((element) => {
      return userId === element.userId;
    });
  }
}
