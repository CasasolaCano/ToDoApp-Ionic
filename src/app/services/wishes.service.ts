import { Injectable } from '@angular/core';
import { List } from '../pages/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  public lists: List[] = [];

  constructor() {

    console.log("Servicio Inicializado");
  }
}
