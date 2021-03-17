import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/pages/models/list.model';
import { WishesService } from '../../services/wishes.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @ViewChild( IonList ) list: IonList;
  @Input() complete = true;

  constructor( public wishesService:WishesService, private router: Router, private alertCtrl: AlertController) { }

  selectList(list: List) {

    const listId = list.id;

    if(this.complete) {

      this.router.navigateByUrl(`/tabs/tab2/add/${listId}`);

    } else {

      this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);

    }

  }

  deleteList(list:List) {

    this.wishesService.deleteList(list);
    
  }

  async editList(list: List) {

    const alert = await this.alertCtrl.create({

      header: 'Editar nombre',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: list.title
        }
      ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
         text: 'Editar',
          handler: (data) => {
            if(data.title.lenght == 0) {
              return;

            } else {
              this.wishesService.editList(list, data.title);
              this.list.closeSlidingItems();
            }
          }
        }
      ]

    })

    alert.present();
    
  }

}
