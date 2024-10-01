import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path: '', redirectTo: 'product', pathMatch: 'full'},
 // {path: 'secteurActivite', component: SecteurActiviteComponent},
 // {path: 'operateur', component: OperateurComponent},
 // {path: 'facture', component: FactureComponent},
 //{path: 'product', component: ProductsComponent},
 //{path: 'stock', component: StockComponent},
 //{path: 'reglement', component: ReglementComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
