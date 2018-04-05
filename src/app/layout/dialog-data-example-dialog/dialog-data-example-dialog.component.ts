import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LocalStorageService} from '../../core/local-storage.service';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.css']
})
export class DialogDataExampleDialogComponent {

  constructor(private localStorage: LocalStorageService,
              public dialogRef: MatDialogRef<DialogDataExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public getLocal(value): void {
    value.favorite = !value.favorite;
    if (value.favorite) {
      this.localStorage.pushLocalStorage(value);
    } else {
      this.localStorage.delLocalStorage(value);
    }
  }
}
