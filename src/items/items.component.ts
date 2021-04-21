import { createDirectiveDefinitionMap } from "@angular/compiler/src/render3/partial/directive";
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from "@angular/core"
import { IItems } from "./IItems";
import { itemservice } from "./items.service";
import { CartService } from 'src/app/cart/cart.service'
import { ActivatedRoute,Router } from "@angular/router";

@Component({
    selector: "item-com",
    templateUrl: "items.component.html",
    styleUrls: ["items.component.css"]
})

export class ItemsComponent implements OnInit, OnChanges, OnDestroy{
    _searchTerm: string;
    movtitle: "Top 10 Movies!";
    imgWidth = "250";
    imgHeight = "150";
    imgRadius = "15";
    searcheditems: IItems[];
    dispic: boolean = true;
    errormessage: string;
    items:IItems[];

    get searchTerm(): string {
        return this._searchTerm;
    }
    set searchTerm(value: string) {
        this._searchTerm = value;
        this.searcheditems = this.searchTerm ? this.performSearch(this.searchTerm) : this.items;
    }
    item:IItems;
    constructor(private router: Router, private aroute: ActivatedRoute,private itemservice:itemservice, private _cartService:CartService) { }

    ngOnInit(): void {
        console.log("At the Init phase in comp cycle");
        this.items=this.itemservice.getitems();
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("changing up..")
    }
    ngOnDestroy(): void {
        console.log("Cleaning up..")
    }
    performSearch(searchby: string): IItems[] {
        searchby = searchby.toLocaleLowerCase();
        return this.items.filter((item: IItems) => item.itemName.toLocaleLowerCase().indexOf(searchby) !== -1);
    }
    cartt: number[];
    Imagedisp(): void{
        this.dispic=!this.dispic;
    }
    addToCart(product)
    {
        alert('added item to cart');
        this._cartService.addToCart(product);
        
    }
    
    
}