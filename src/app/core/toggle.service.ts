import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToggleService {

  constructor() { }

  private boolSource = new Subject<boolean>();
  public checked$ = this.boolSource.asObservable();

  public showSelected(value: boolean): void {
    this.boolSource.next(value);
  }
}
