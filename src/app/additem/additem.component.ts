import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IItems } from 'src/items/IItems';
import { itemservice } from "src/items/items.service"
import { Kitchens } from "./additem";

@Component({ 
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
    fruitID:number;
    fruitName:string;
    fruitSrc:string;
    fruitCategory:string;
    fruitRate:number;
    kitchens:IItems[]=[];

    kitchen=new Kitchens();
  constructor(private fruitservice:itemservice, private route:Router) { }

  ngOnInit(): void {
    this.kitchens=this.fruitservice.getitems();
  }
  save(userForm:NgForm){
    alert("Form Submitted"+this.kitchen.itemName);
  }
  onFruitAdd(userForm:NgForm){
    let a={
      itemid:+this.kitchen.itemid,
      itemName:this.kitchen.itemName,
      itemImg:this.kitchen.itemImg,
      itemcat:this.kitchen.itemcat,
      itemRating:+this.kitchen.itemRating,
      itemprice:+this.kitchen.itemprice,
      itemquantity:+this.kitchen.itemquantity,
      totalprice:+this.kitchen.totalprice
    }
    this.kitchens.push(a);
    alert("Item Added");
    this.route.navigate(['./additem']);    
  }

}