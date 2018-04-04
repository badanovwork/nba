import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToggleService {

  constructor() { }

  private boolSource = new Subject<boolean>();
  checked$ = this.boolSource.asObservable();

  showSelected(value: boolean) {
    this.boolSource.next(value);
  }

}
