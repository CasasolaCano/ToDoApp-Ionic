import { ItemList } from './list-item.model';
export class List {

    id: number;
    title: string;
    createOn: Date;
    finishOn: Date;
    complete: boolean;
    items: ItemList[];

    constructor(title: string ) {

        this.title = title;
        this.createOn = new Date();
        this.complete = false;
        this.items = [];

        this.id = new Date().getTime();
    }
}