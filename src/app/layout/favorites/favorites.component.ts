import {Component, OnInit} from '@angular/core';
import {Players} from '../../models/players';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public players: Players[] = [];

  ngOnInit() {
    const localValue = localStorage.getItem('players');
    this.players = JSON.parse(localValue);
  }
}
