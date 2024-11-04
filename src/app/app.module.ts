import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "./products/products.component";
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { AddSecteurActiviteComponent } from './add-secteur-activite/add-secteur-activite.component';
import { EditSecteurActiviteComponent } from './edit-secteur-activite/edit-secteur-activite.component';


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
  SecteurActiviteComponent,
  AddSecteurActiviteComponent,
  EditSecteurActiviteComponent
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
