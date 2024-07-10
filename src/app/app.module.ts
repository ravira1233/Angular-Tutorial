import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingMall } from './ShoppingMall/Shopping-mall';
import { ShopComponent } from './ShoppingMall/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingMall,
    ShopComponent,
    ProductAddComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
