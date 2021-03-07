export class ItemList {

    public desc: string;
    public complete: boolean;

    constructor (desc:string) {
        this.desc = desc;
        this.complete = false;
    }
}