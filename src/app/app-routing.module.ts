import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import { StockComponent } from './stock/stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';


const routes: Routes = [

  {path: '', redirectTo: 'product', pathMatch: 'full'},
 // {path: 'secteurActivite', component: SecteurActiviteComponent},
 // {path: 'operateur', component: OperateurComponent},
 // {path: 'facture', component: FactureComponent},
 {path: 'product', component: ProductsComponent},
 {path: 'stock', component: StockComponent},
 { path: 'add-stock', component: AddStockComponent },
 { path: 'edit-stock/:id', component: EditStockComponent },
 //{path: 'reglement', component: ReglementComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
