import { IItems } from "./IItems";
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class itemservice{

    getitems():IItems[]{
        return [
            {
            
                "itemid": 1,
                "itemName": "Red Chillies",
                "itemcat": "Vegetable",
                "itemRating": 4.8,
                "itemprice":30,
                "itemImg": "assets/images/chillies.jpg",
                "itemquantity" : 1,
                "totalprice":0
            },
            {
                
                "itemid": 2,
                "itemName": "beetroot",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 50,
                "itemImg": "assets/images/beetroot.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 3,
                "itemName": "Cucumber",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 20,
                "itemImg": "assets/images/cucumber.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 4,
                "itemName": "Cauliflower",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 15,
                "itemImg": "assets/images/cauliflower.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 5,
                "itemName": "Ginger",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 10,
                "itemImg": "assets/images/ginger.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 6,
                "itemName": "Potato",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 25,
                "itemImg": "assets/images/potato.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 7,
                "itemName": "Onions",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 50,
                "itemImg": "assets/images/onions.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 8,
                "itemName": "Avacoda",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 30,
                "itemImg": "assets/images/avacoda.jpg",
                "itemquantity" : 0,
                "totalprice":0
            
            },
            {
                
                "itemid": 9,
                "itemName": "Lemon",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 10,
                "itemImg": "assets/images/lemon.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 10,
                "itemName": "Beans",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 30,
                "itemImg": "assets/images/beans.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 11,
                "itemName": "Sweet corn",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 10,
                "itemImg": "assets/images/corn.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 12,
                "itemName": "Ladies Finger",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 35,
                "itemImg": "assets/images/ladiesfinger.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 13,
                "itemName": "Tomato",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 40,
                "itemImg": "assets/images/tomatoes.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 14,
                "itemName": "Capsicum",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 45,
                "itemImg": "assets/images/capsicum.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            },
            {
                
                "itemid": 15,
                "itemName": "Carrot",
                "itemcat": "vegetables",
                "itemRating": 4.8,
                "itemprice": 30,
                "itemImg": "assets/images/carrot.jpg",
                "itemquantity" : 1,
                "totalprice":0
            
            }
        ]
    }
    getitem(id: number): IItems {
        const item = this.getitems().find(
            item => item.itemid === id
        )
        return item;
    }
}