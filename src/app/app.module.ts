import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "./products/products.component";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';


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
  FournisseurComponent,
  AddFournisseurComponent,
  EditFournisseurComponent
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
