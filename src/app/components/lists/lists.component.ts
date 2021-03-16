import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/pages/models/list.model';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @Input() terminada = true;

  constructor( public wishesService:WishesService, private router: Router) { }

  selectList(list: List) {

    const listId = list.id;

    if(this.terminada) {

      this.router.navigateByUrl(`/tabs/tab2/add/${listId}`);

    } else {

      this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);

    }

  }

  deleteList(list:List) {

    this.wishesService.deleteList(list);
    
  }

}
