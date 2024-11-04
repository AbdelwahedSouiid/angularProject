import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "./products/products.component";
import { StockComponent } from './stock/stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';


@NgModule({
  declarations: [
    AppComponent,
   ProductsComponent,
  //  StockComponent,
   // ReglementComponent,
   // SecteurActiviteComponent,
   // OperateurComponent,
   // FactureComponent,
    NavbarComponent,
  StockComponent,
  AddStockComponent,
  EditStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //NgbModalModule,
   // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
