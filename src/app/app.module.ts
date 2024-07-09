import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingMall } from './ShoppingMall/Shopping-mall';
import { ShopComponent } from './ShoppingMall/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingMall,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
