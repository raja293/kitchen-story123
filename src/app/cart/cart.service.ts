import{Injectable} from '@angular/core';
import { IItems } from 'src/items/IItems';
@Injectable({
    providedIn:'root'
})
export class CartService {
    items = [];
  
    addToCart(product) {
      product.totalprice=product.itemprice*product.itemquantity;
      this.items.push(product);
      
      }
    remove(product) {
      this.items.pop();
    }
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
}