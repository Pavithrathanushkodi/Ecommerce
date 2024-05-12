import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogiComponent } from './logi/logi.component';
import { SareeComponent } from './saree/saree.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WishlistService } from './wishlist.service';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'logi',component:LogiComponent},
{path:'saree',component:SareeComponent},
{path:'cart',component:CartComponent},
{path:'buy',component:BuyComponent},
{path:'kids',component:KidsComponent},
{path:'mens',component:MensComponent},
{path:'wishlist',component:WishlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
