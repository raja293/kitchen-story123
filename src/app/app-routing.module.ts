import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/Home/home.component';
import { ItemsComponent } from 'src/items/items.component';
import { ItemdetailComponent } from 'src/item details/itemdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdditemComponent } from './additem/additem.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "items", component: ItemsComponent},
  { path: "items/:id", component: ItemdetailComponent},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent},
  { path: "about", component: AboutComponent},
  { path: "contact", component: ContactComponent},
  { path: "cart", component: CartComponent},
  { path: "admin", component: AdminComponent},
  { path: "additem", component:AdditemComponent},
  { path: "addingr", component:IngredientsComponent},
  { path: "payment", component:PaymentComponent},
  
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "**", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
