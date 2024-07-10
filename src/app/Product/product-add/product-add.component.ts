import { Component, EventEmitter, Output, output } from '@angular/core';
import { IProductModel } from '../../Model/ProductModel';
import { Route } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {

  /**
   *
   */
  constructor() {
   
    
  }
  @Output() addproduct= new EventEmitter<IProductModel>();
  product:IProductModel={ID:0,ImageUrl:'',Name:'',price:''}
  
  OnProductAdd()
  {

    this.addproduct.emit(this.product);
    
  }


}
