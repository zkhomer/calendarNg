import {Injectable} from '@angular/core';
import { RowTeam } from '../interface/team';
import { HttpQueryService } from './httpQuery.service';


@Injectable()
export class TeamService {
  teams: RowTeam[];
  setTeams(teams): void {
    this.teams = teams;
  }
  getTeams(): RowTeam[] {
    return this.teams;
  }
  getTeamById(teamId): RowTeam {
    return this.teams.find((element) => {
      return teamId === element.id;
    });
  }

}
