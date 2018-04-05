import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Team} from '../models/team';
import { Players} from '../models/players';
import { LoaderService} from './loader/loader.service';

import { Observable} from 'rxjs/Observable';
import { ErrorObservable} from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import { catchError, retry } from 'rxjs/operators';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private loaderService: LoaderService, private localStorage: LocalStorageService) { }

  getTeamsData(): Observable<Team[]> {
    this.showLoader();
    return this.http
      .get<Team[]> ('teams-description.json')
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
      .finally (() => {
        this.onEnd ();
      });
  }

  getPlayersStatsTeam(value): Observable<Players[]> {
    let tempArr = this.localStorage.getLocalStorage();
    this.showLoader();
    return this.http
      .get<any>(`https://nba-players.herokuapp.com/players-stats-teams/${value}`)
      .map(data => {
        data.forEach(function (item) {
          tempArr.forEach(function (itemArr) {
            if (item.name === itemArr.name) {
              item.favorite = true;
            }
          });
          const arrName = item.name.toLowerCase().split(' ');
          if (arrName.length > 2) {
            item.link = `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}_${arrName[2].replace(".", "")}/${arrName[0].replace(".", "")}`;
          } else {
            item.link = `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}/${arrName[0].replace(/\./g, "")}`;
          }
        });
        return data.map( function( player: any ) {
          return {
            favorite: player.favorite,
            link: player.link,
            name: player.name,
            teamAcronym: player.team_acronym,
            teamName : player.team_name,
            gamesPlayed: player.games_played,
            minutesPerGame: player.minutes_per_game,
            fieldGoalsAttemptedPerGame: player.field_goals_attempted_per_game,
            fieldGoalsMadePerGame: player.field_goals_made_per_game,
            fieldGoalPercentage: player.field_goal_percentage,
            freeThrowPercentage: player.free_throw_percentage,
            threePointAttemptedPerGame: player.three_point_attempted_per_game,
            threePointMadePerGame: player.three_point_made_per_game,
            threePointPercentage: player.three_point_percentage,
            pointsPerGame: player.points_per_game,
            offensiveReboundsPerGame: player.offensive_rebounds_per_game,
            defensiveReboundsPerGame: player.defensive_rebounds_per_game,
            reboundsPerGame: player.rebounds_per_game,
            assistsPerGame: player.assists_per_game,
            stealsPerGame: player.steals_per_game,
            blocksPerGame: player.blocks_per_game,
            turnoversPerGame: player.turnovers_per_game,
            playerEfficiencyRating: player.player_efficiency_rating
          };
        });
      })
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
      .finally (() => {
        this.onEnd ();
      });
  }

  getPlayers(): Observable<Players[]> {
    let tempArr = this.localStorage.getLocalStorage();
    this.showLoader();
    return this.http
      .get<any>(`https://nba-players.herokuapp.com/players-stats`)
      .map(data => {
        data.forEach(function (item) {
          tempArr.forEach(function (itemArr) {
            if (item.name === itemArr.name) {
              item.favorite = true;
            }
          });
          const arrName = item.name.toLowerCase().split(' ');
          if (arrName.length > 2) {
            item.link = `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}_${arrName[2].replace(".", "")}/${arrName[0].replace(".", "")}`;
          } else {
            item.link = `https://nba-players.herokuapp.com/players/${arrName[1].replace(".", "")}/${arrName[0].replace(/\./g, "")}`;
          }
        });
        return data.map( function( player: any ) {
          return {
            favorite: player.favorite,
            link: player.link,
            name: player.name,
            teamAcronym: player.team_acronym,
            teamName : player.team_name,
            gamesPlayed: player.games_played,
            minutesPerGame: player.minutes_per_game,
            fieldGoalsAttemptedPerGame: player.field_goals_attempted_per_game,
            fieldGoalsMadePerGame: player.field_goals_made_per_game,
            fieldGoalPercentage: player.field_goal_percentage,
            freeThrowPercentage: player.free_throw_percentage,
            threePointAttemptedPerGame: player.three_point_attempted_per_game,
            threePointMadePerGame: player.three_point_made_per_game,
            threePointPercentage: player.three_point_percentage,
            pointsPerGame: player.points_per_game,
            offensiveReboundsPerGame: player.offensive_rebounds_per_game,
            defensiveReboundsPerGame: player.defensive_rebounds_per_game,
            reboundsPerGame: player.rebounds_per_game,
            assistsPerGame: player.assists_per_game,
            stealsPerGame: player.steals_per_game,
            blocksPerGame: player.blocks_per_game,
            turnoversPerGame: player.turnovers_per_game,
            playerEfficiencyRating: player.player_efficiency_rating
          };
        });
      })
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
      .finally (() => {
        this.onEnd ();
      });
  }

  private showLoader (): void {
    this.loaderService.show ();
  }
  private hideLoader (): void {
    this.loaderService.hide ();
  }
  private onEnd (): void {
    this.hideLoader ();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
