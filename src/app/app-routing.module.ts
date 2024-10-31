import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';  // Import your facture component

const routes: Routes = [
  { path: 'facture', component: FactureComponent },  // Example path for Facture
  { path: '', redirectTo: '/facture', pathMatch: 'full' }  // Default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
