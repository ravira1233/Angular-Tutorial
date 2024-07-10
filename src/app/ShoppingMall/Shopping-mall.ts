import { Component } from "@angular/core";

@Component({
    templateUrl:'./Shopping-mall.html',
    styleUrl:'./Shopping-mall.scss',
    //attribute selector:'app-shopping-mall'
    //selector:'[app-shopping-mall]' //element based selector
    selector:'app-shopping-mall' 
})
export class ShoppingMall{


    //string interpolation
    name:string='This is my mall'
    isDisable:boolean=true
    message:string='this is my shop not open'
    shopname:string='MAX'
    isNoShop:boolean=false
    shops:string[]=['one','two'];
    /**
     *
     */
    constructor() {
        setTimeout(() => {
            this.isDisable=false
        },2000);
        
    }

    createShop():void{

        this.message='shop is opened' + this.shopname
        this.isNoShop=true
    }

    OnEventcapture(event : Event) {
       this.shopname=(<HTMLInputElement>event.target).value
        }

}