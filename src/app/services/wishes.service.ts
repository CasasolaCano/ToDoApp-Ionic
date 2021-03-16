import { Injectable } from '@angular/core';
import { List } from '../pages/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public lists: List[] = [];

  constructor() {

    this.loadStorage();

    
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  deleteList(list: List) {
    this.lists = this.lists.filter(dataList => dataList.id !== list.id);

    this.saveStorage();
  }

  getList(id: string | number) : List {

    id = Number(id);

    return this.lists.find(listData => {
      return listData.id === id;
    });
  }

  saveStorage() {

    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {

    if(localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }

  }
}
