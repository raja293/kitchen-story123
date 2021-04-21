import { Component, OnInit, OnChanges,SimpleChanges } from '@angular/core';
import{CartService} from './cart.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  items=this.cartService.getItems();
  cartTotal:number=0;
  constructor(private cartService :CartService, private router:Router) { }
  
  ngOnInit(): void {
    
    for(let index=0;index<this.items.length;index++)
    {
      this.cartTotal+= this.items[index].itemprice;
    }
    console.log(this.cartTotal);
    
    
  }
  ngOnChanges(changes:SimpleChanges):void{
    for(let index=0;index<this.items.length;index++)
    {
      this.cartTotal+= this.items[index].itemprice*this.items[index].itemquantity;
    }
    console.log(this.cartTotal);
    
}
pay(){
  this.router.navigate(['/payment']);
}
  increment(id:number)
 {
     const item=this.items.find(item => item.itemid ===id );
     item.itemquantity+=1;
     item.totalprice=item.itemprice*item.itemquantity;
     this.cartTotal+=item.itemprice;
   }
  decrement(id:number)
  {
    const item=this.items.find(item => item.itemid ===id );
    item.itemquantity-=1;
    item.totalprice=item.itemprice*item.itemquantity;
    this.cartTotal-=item.itemprice;
   }
   deleteItem(name:string)
      {
        this.cartService.remove(name);
        const index=this.items.findIndex(
          item=>item.itemName===name
        )
        if(index>=0){
          this.items.pop();
        }
      }
      clear(){
        this.cartService.clearCart();
      }
      
}