import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../shared/Model/Fournisseur';
import { FournisseurService } from '../shared/Service/fournisseur.service';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void {
    this.loadFournisseurs(); // Charger les fournisseurs à l'initialisation
  }

  // Charger tous les fournisseurs
  loadFournisseurs(): void {
    this.fournisseurService.getAllFournisseurs().subscribe({
      next: (data) => {
        this.fournisseurs = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des fournisseurs:', err);
      }
    });
  }

  // Supprimer un fournisseur
  deleteFournisseur(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur ?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe({
        next: () => {
          this.loadFournisseurs(); // Recharger les fournisseurs après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du fournisseur:', err);
        }
      });
    }
  }
}
