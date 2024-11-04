import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecteurActiviteService } from '../shared/Service/Secteur-activite.service';
import { SecteurActivite } from '../shared/Model/Secteur-activite';
@Component({
  selector: 'app-edit-secteur-activite',
  templateUrl: './edit-secteur-activite.component.html',
  styleUrl: './edit-secteur-activite.component.css',
})
export class EditSecteurActiviteComponent implements OnInit {
  secteur: SecteurActivite = new SecteurActivite(); // Initialise un objet SecteurActivite

  constructor(
    private secteurActiviteService: SecteurActiviteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupère l'ID du secteur depuis l'URL
    if (id) {
      this.loadSecteur(+id); // Convertit l'ID en nombre avant de charger le secteur
    }
  }

  loadSecteur(id: number): void {
    // Changez le type du paramètre à number
    this.secteurActiviteService.getSecteurActiviteById(id).subscribe(
      (secteur: SecteurActivite) => {
        this.secteur = secteur; // Assigne les données récupérées à l'objet secteur
      },
      (error) => {
        console.error('Erreur lors de la récupération du secteur', error);
      }
    );
  }

  editSecteur(): void {
    this.secteurActiviteService.editSecteurActivite(this.secteur).subscribe(
      (response) => {
        console.log("Secteur d'activité modifié avec succès!", response);
        this.router.navigate(['/secteur']); // Redirige vers la liste des secteurs
      },
      (error) => {
        console.error(
          "Erreur lors de la modification du secteur d'activité",
          error
        );
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/secteur']); // Redirige vers la liste des secteurs
  }
}
