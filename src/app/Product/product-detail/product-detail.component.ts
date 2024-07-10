import { Component, Input, input } from '@angular/core';
import { IProductModel } from '../../Model/ProductModel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() product:IProductModel;



}
