import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SecteurActiviteComponent } from './secteur-activite/secteur-activite.component';
import { AddSecteurActiviteComponent } from './add-secteur-activite/add-secteur-activite.component';
import { EditSecteurActiviteComponent } from './edit-secteur-activite/edit-secteur-activite.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'edit-secteur-activite/:id',
    component: EditSecteurActiviteComponent,
  },
  // {path: 'secteurActivite', component: SecteurActiviteComponent},
  // {path: 'operateur', component: OperateurComponent},
  // {path: 'facture', component: FactureComponent},
  { path: 'product', component: ProductsComponent },
  { path: 'secteur', component: SecteurActiviteComponent },
  { path: 'secteurs/add', component: AddSecteurActiviteComponent },
  //{path: 'stock', component: StockComponent},
  //{path: 'reglement', component: ReglementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
