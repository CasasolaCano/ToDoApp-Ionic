import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../models/list.model';
import { ItemList } from '../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem: string = '';

  constructor(private wishesService: WishesService,
              private router: ActivatedRoute) {

    const listId = this.router.snapshot.paramMap.get('listaId');

    this.list = this.wishesService.getList(listId);

    console.log(this.list);

   }

  ngOnInit() {
  }

  addItem() {

    if(this.nameItem.length === 0) {
      return;
    } 
    
    const newItem = new ItemList(this.nameItem);

    this.list.items.push(newItem);

    this.nameItem = '';
    this.wishesService.saveStorage();

  }

  changeCheck(item:ItemList) {

    const pendings = this.list.items.filter(itemData => !itemData.complete).length;

    console.log({pendings});

    if(pendings === 0) {
      this.list.finishOn = new Date();
      this.list.complete = true;
    } else {
      this.list.finishOn = null;
      this.list.complete = false;
    }

    this.wishesService.saveStorage();

    console.log(this.list);
  }

}
