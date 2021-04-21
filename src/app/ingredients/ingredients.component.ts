import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { IItems } from 'src/items/IItems';
import { itemservice } from "src/items/items.service"

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  imgWidth="120";
  imgHeight="100";
  imgRadius="15";
  vtbl:IItems[]=[];
  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:itemservice){}

  ngOnInit(): void {
    this.vtbl=this.utservice.getitems();
    
      }
      deleteItem(name:string)
      {
        const index=this.vtbl.findIndex(
          item=>item.itemName===name
        )
        if(index>=0){
          this.vtbl.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/addingr']);
      }
  }

}
