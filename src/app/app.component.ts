import { Component } from '@angular/core';
import { IProductModel } from './Model/ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  productList:IProductModel[]=[{ID:1,Name:'Scenaris',ImageUrl:'https://media.istockphoto.com/id/1629818920/photo/abstract-gravity-wave-background.jpg?s=1024x1024&w=is&k=20&c=iEXr_b_LUumn1Ns2nIoSg6zT7Qr2v62ubWnanW9lDjc=',price:'10$'}]

  onGetProduct(prodct:IProductModel)
  {
    this.productList.push(prodct)
    console.log(this.productList);
  }
}
