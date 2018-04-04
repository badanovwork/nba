import { Component, OnInit } from '@angular/core';
import { Players } from '../../models/players';
import {LocalStorageService} from '../../core/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  players: Players[] = [];

  constructor() { }

  ngOnInit() {
    let localValue = localStorage.getItem('players');
    this.players = JSON.parse(localValue);
  }
}
