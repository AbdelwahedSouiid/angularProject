import { Component } from '@angular/core';
import { Fournisseur } from '../shared/Model/Fournisseur';
import { FournisseurService } from '../shared/Service/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrl: './add-fournisseur.component.css'
})

  export class AddFournisseurComponent {
    fournisseur: Fournisseur = {
      code: '',
      libelle: '',
      categorieFournisseur: undefined
    };
  
    constructor(private fournisseurService: FournisseurService, private router: Router) {}
  
    addFournisseur() {
      this.fournisseurService.addFournisseur(this.fournisseur).subscribe(() => {
        alert('Fournisseur ajouté avec succès !');
        this.router.navigate(['/fournisseur']); // Redirigez vers la liste des fournisseurs après l'ajout
      }, error => {
        console.error('Erreur lors de l\'ajout du fournisseur:', error);
        alert('Erreur lors de l\'ajout du fournisseur.');
      });
    }
  
    cancel() {
      this.router.navigate(['/fournisseur']); // Annule l'ajout et redirige vers la liste
    }
  }

