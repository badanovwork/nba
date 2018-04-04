import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { HttpService } from '../../core/http.service';
import { Team } from '../../models/team';
import { Players } from '../../models/players';
import {LocalStorageService} from '../../core/local-storage.service';
import { MatDialog } from '@angular/material';
import { DialogDataExampleDialogComponent } from '../dialog-data-example-dialog/dialog-data-example-dialog.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [HttpService]
})
export class TeamsComponent implements OnInit, AfterViewInit {

  @Input() bufferValue = 0;

  private condition: boolean = true;

  teams: Team[] = [];
  players: Players[] = [];
  localArray: Players[] = [];

  constructor(private http: HttpService, private localStorage: LocalStorageService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.http.getTeamsData().subscribe(data => this.teams = data);
    this.localStorage.getLocalStorage();
    this.localArray = this.localStorage.getLocalStorage();
  }

  ngAfterViewInit() {
    this.bufferValue = 100;
  }

  toggle(teamTag) {
    this.condition = !this.condition;
    this.http.getPlayersStatsTeam(teamTag).subscribe(data => {
      this.players = data;
    });
  }

  getLocal(value) {
    value.favorite = !value.favorite;
    if (value.favorite) {
      this.localStorage.pushLocalStorage(value);
    } else {
      this.localStorage.delLocalStorage(value);
    }
  }

  openDialog(value) {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: value
    });
  }
}


