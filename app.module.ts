import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LogiComponent } from './logi/logi.component';
import { HomeComponent } from './home/home.component';
import { SareeComponent } from './saree/saree.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { BannerComponent } from './banner/banner.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { WishlistComponent } from './wishlist/wishlist.component';
@NgModule({
  declarations: [
    AppComponent,
  
    RegisterComponent,
    LogiComponent,
    HomeComponent,
    SareeComponent,
    CartComponent,
    BuyComponent,
    BannerComponent,
    KidsComponent,
    MensComponent,
    SubscribeComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
