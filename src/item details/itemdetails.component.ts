import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { IItems } from 'src/items/IItems';
import { CartService } from 'src/app/cart/cart.service'
import { itemservice } from 'src/items/items.service'

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailComponent implements OnInit {

  pgtitle: string = "Item Detail Page";
  item:IItems;
  
  constructor(private router: Router, private aroute: ActivatedRoute,private itemservice:itemservice, private _cartService:CartService) { }

  ngOnInit(): void {
    let id = +this.aroute.snapshot.paramMap.get('id');
    // alert(id);
    this.pgtitle += `:${id}`;
    this.item = this.itemservice.getitem(id);
     
      
     }


  getback() {
    this.router.navigate(['/items']);

  }
  addToCart(product)
    {
        this._cartService.addToCart(product);
        this.item.itemquantity+=1;
        window.alert('added item to cart');
    }
  increment()
  {
    this.item.itemquantity+=1;
    
  }
  decrement()
  {
    this.item.itemquantity-=1;
  }

}
