import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ProductsComponent} from "./products/products.component";
import {StockComponent} from "./stock/stock.component";
import {ReglementComponent} from "./reglement/reglement.component";
import {SecteurActiviteComponent} from "./secteur-activite/secteur-activite.component";
import {OperateurComponent} from "./operateur/operateur.component";
import {FactureComponent} from "./facture/facture.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StockComponent,
    ReglementComponent,
    SecteurActiviteComponent,
    OperateurComponent,
    FactureComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
