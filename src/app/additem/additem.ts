export class Kitchen{
    itemid:number;
    itemName:string;
    itemImg:string;
    itemcat:string;
    itemRating:number;
    itemprice:number;
    itemquantity:number;
    totalprice:number;
    
}
export class Kitchens{
    constructor(public itemid="", public itemName="",public itemImg="", public itemcat="",public itemRating="", public itemprice="", public itemquantity="", public totalprice=""){

    }
}
