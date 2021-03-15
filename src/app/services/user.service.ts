import { Injectable } from '@angular/core';
import { RowUser } from '../interface/user';
@Injectable()
export class UserService {
  users: RowUser[];
  setUsers(users): void {
    this.users = users;
  }
  getUsers(): RowUser[] {
    return this.users;
  }
  getUserById(userId): RowUser {
    return this.users.find((element) => {
      return userId === element.id;
    });
  }
}
