import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';


const routes: Routes = [

  {path: '', redirectTo: 'product', pathMatch: 'full'},
 // {path: 'secteurActivite', component: SecteurActiviteComponent},
 // {path: 'operateur', component: OperateurComponent},
 // {path: 'facture', component: FactureComponent},
 {path: 'product', component: ProductsComponent},
 {path: 'fournisseur', component: FournisseurComponent},
 {path: 'add-fournisseur', component:  AddFournisseurComponent},
 { path: 'edit-fournisseur/:id', component: EditFournisseurComponent },
 //{path: 'stock', component: StockComponent},
 //{path: 'reglement', component: ReglementComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
