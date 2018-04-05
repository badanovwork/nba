import {Component, OnInit, AfterViewInit, Input, ChangeDetectorRef} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Team} from '../../models/team';
import {Players} from '../../models/players';
import {LocalStorageService} from '../../core/local-storage.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [HttpService]
})

export class TeamsComponent implements OnInit, AfterViewInit {

  @Input() bufferValue: number = 0;

  private condition: boolean = true;

  public teams: Team[] = [];
  public players: Players[] = [];
  public localArray: Players[] = [];

  constructor(private http: HttpService,
              private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.http.getTeamsData().subscribe(data => this.teams = data);
    this.localStorage.getLocalStorage();
    this.localArray = this.localStorage.getLocalStorage();
  }

  ngAfterViewInit(): void {
    this.bufferValue = 100;
  }

  public toggle(teamTag):  void {
    this.condition = !this.condition;
    this.http.getPlayersStatsTeam(teamTag).subscribe(data => {
      this.players = data;
    });
  }
}


