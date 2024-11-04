import { Component } from '@angular/core';
import { SecteurActivite } from '../shared/Model/Secteur-activite';
import { SecteurActiviteService } from '../shared/Service/Secteur-activite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-secteur-activite',
  templateUrl: './add-secteur-activite.component.html',
  styleUrl: './add-secteur-activite.component.css',
})
export class AddSecteurActiviteComponent {
  newSecteur: SecteurActivite = new SecteurActivite();

  constructor(
    private secteurActiviteService: SecteurActiviteService,
    private router: Router
  ) {}

  addSecteur(): void {
    this.secteurActiviteService.addSecteurActivite(this.newSecteur).subscribe(
      (data) => {
        console.log('Secteur ajouté avec succès', data);
        this.router.navigate(['/secteur']); // Redirection vers la liste des secteurs
      },
      (error) => {
        console.error("Erreur lors de l'ajout du secteur", error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/secteur']); // Redirection vers la liste des secteurs
  }
}
