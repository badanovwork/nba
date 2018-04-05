import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import {Players} from '../../models/players';
import {HttpService} from '../../core/http.service';
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

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getPlayers().subscribe(data => this.players = data);
  }

  ngAfterViewInit() {
    this.bufferValue = 100;
  }
}
