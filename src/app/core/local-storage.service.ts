import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  private arr: any[] = this.getLocalStorage();
  private temp: any[];

  public pushLocalStorage(value) {
    this.arr.push(value);
    const str = JSON.stringify(this.arr);
    localStorage.setItem('players', str);
  }

  public delLocalStorage(value) {
    this.temp = this.arr.filter(function (item) {
      return value.name !== item.name;
    });
    this.arr =  this.temp;
    const str = JSON.stringify(this.arr);
    localStorage.setItem('players', str);
  }

  public getLocalStorage() {
    const localStorageItem = localStorage.getItem('players');
    const arrLocal = JSON.parse(localStorageItem);
    return ( arrLocal !== null) ? arrLocal : [];
  }
}
