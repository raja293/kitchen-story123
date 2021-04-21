import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from 'src/Home/home.component';
import { ItemdetailComponent } from 'src/item details/itemdetails.component';
import { ItemsComponent } from 'src/items/items.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { itemservice } from 'src/items/items.service';
import { CartService } from './cart/cart.service';
import { AdminComponent } from './admin/admin.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { VegComponent } from './veg/veg.component';
import { AdditemComponent } from './additem/additem.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    ItemdetailComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    AdminComponent,
    IngredientsComponent,
    VegComponent,
    AdditemComponent,
    PaymentComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [itemservice, CartService],
  bootstrap: [AppComponent, ItemsComponent, HomeComponent]
})
export class AppModule { }
