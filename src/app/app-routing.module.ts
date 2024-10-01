import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecteurActiviteComponent} from "./secteur-activite/secteur-activite.component";
import {OperateurComponent} from "./operateur/operateur.component";
import {FactureComponent} from "./facture/facture.component";
import {ProductsComponent} from "./products/products.component";
import {StockComponent} from "./stock/stock.component";
import {ReglementComponent} from "./reglement/reglement.component";

const routes: Routes = [

  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'secteurActivite', component: SecteurActiviteComponent},
  {path: 'operateur', component: OperateurComponent},
  {path: 'facture', component: FactureComponent},
 {path: 'product', component: ProductsComponent},
 {path: 'stock', component: StockComponent},
 {path: 'reglement', component: ReglementComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
