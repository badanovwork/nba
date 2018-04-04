import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  arr: any[] = this.getLocalStorage();

  constructor() { }

  pushLocalStorage(value) {
      this.arr.push(value);
      let str = JSON.stringify(this.arr);
      localStorage.setItem('players', str);
  }

  delLocalStorage(value) {
    let temp = this.arr.filter(function (item) {
      return value.name !== item.name;
    });
    this.arr = temp;
    let str = JSON.stringify(this.arr);
    localStorage.setItem('players', str);
  }

  getLocalStorage() {
    let localStorageItem = localStorage.getItem('players');
    let arrLocal = JSON.parse(localStorageItem);
    if (arrLocal !== null) {
      return arrLocal;
    } else {
      return [];
    }
  }
}
