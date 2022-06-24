import { PriceModel } from "./price.model";

export class BookModel {
    public id: number;
    public title: string;
    public totalPages: number;
    private _author: string;
    public price: PriceModel

    public set author(value: string) {
        this._author = 'Author: ' + value;
    }

    public get author() {
        return this._author;
    }


}