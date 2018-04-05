import {Component, Input} from '@angular/core';
import {DialogDataExampleDialogComponent} from '../dialog-data-example-dialog/dialog-data-example-dialog.component';
import {MatDialog} from '@angular/material';
import {LocalStorageService} from '../../core/local-storage.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {

  @Input() player;

  constructor( private localStorage: LocalStorageService,
               public dialog: MatDialog) { }


  public getLocal(value): void {
    value.favorite = !value.favorite;
    if (value.favorite) {
      this.localStorage.pushLocalStorage(value);
    } else {
      this.localStorage.delLocalStorage(value);
    }
  }

  public openDialog(value): void {
    this.dialog.open(DialogDataExampleDialogComponent, {
      width: '440px',
      data: value
    });
  }
}
