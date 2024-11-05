import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../shared/Model/Fournisseur';
import { FournisseurService } from '../shared/Service/fournisseur.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrl: './edit-fournisseur.component.css'
})
export class EditFournisseurComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur(); // Initialise un objet Fournisseur
  errorMessage: string | null = null; // Pour afficher les messages d'erreur

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupère l'ID du fournisseur depuis l'URL
    if (id) {
      this.loadFournisseur(+id); // Convertit l'ID en nombre avant de charger le fournisseur
    }
  }

  loadFournisseur(id: number): void {
    this.fournisseurService.getFournisseurById(id).subscribe(
      (data: Fournisseur) => {
        this.fournisseur = data; // Assigne les données récupérées à l'objet fournisseur
      },
      (error) => {
        console.error('Erreur lors de la récupération du fournisseur', error);
        this.errorMessage = 'Erreur lors de la récupération des données du fournisseur.';
      }
    );
  }

  editFournisseur(): void {
    this.fournisseurService.editFournisseur(this.fournisseur).subscribe(
      (response) => {
        console.log('Fournisseur modifié avec succès!', response);
        this.router.navigate(['/fournisseur']); // Redirige vers la liste des fournisseurs
      },
      (error) => {
        console.error('Erreur lors de la modification du fournisseur', error);
        this.errorMessage = 'Erreur lors de la mise à jour du fournisseur.';
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/fournisseur']); // Redirige vers la liste des fournisseurs
  }
}