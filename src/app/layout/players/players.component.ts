import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Players} from '../../models/players';
import {HttpService} from '../../core/http.service';
import {LocalStorageService} from '../../core/local-storage.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, AfterViewInit {

  @Input() bufferValue = 0;

  private players: Players[] = [];
  private pageSize = 10;
  public pageSizeOptions = [5, 10, 25, 100];
  public pageEvent: PageEvent = {pageIndex: 0, pageSize: this.pageSize, length: this.players.length};

  constructor(private http: HttpService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.http.getPlayers().subscribe(data => this.players = data);
  }

  ngAfterViewInit() {
    this.bufferValue = 100;
  }

  getLocal(value) {
    value.favorite = !value.favorite;
    if (value.favorite) {
      this.localStorage.pushLocalStorage(value);
    } else {
      this.localStorage.delLocalStorage(value);
    }
  }
}
