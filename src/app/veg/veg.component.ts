import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { IItems } from 'src/items/IItems';
import { itemservice } from "src/items/items.service"

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {
  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vg:IItems[]=[];
  name:IItems;
  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:itemservice){}

  ngOnInit(): void {
    this.vg=this.utservice.getitems();
    
      }
      deleteItem(name:string)
      {
        const index=this.vg.findIndex(
          item=>item.itemName===name
        )
        if(index>=0){
          this.vg.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/home']);
      }
    }
    addItem(id:number)
    {
      this.vg.push(this.vg[id-1]);
    }
    onadd(id:number)
    {
      this.addItem(id);
      this.route.navigate(['/home']);
    }

}
