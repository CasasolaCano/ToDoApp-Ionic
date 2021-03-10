import { Injectable } from '@angular/core';
import { List } from '../pages/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public lists: List[] = [];

  constructor() {

    const list1 = new List("Albums de música rock");
    const list2 = new List("Albums de música jazz");

    this.lists.push(list1,list2);

    
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
  }
}
