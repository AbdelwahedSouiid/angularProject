import { Component, OnInit } from '@angular/core';
import { SecteurActivite } from '../shared/Model/Secteur-activite';
import { SecteurActiviteService } from '../shared/Service/Secteur-activite.service';

@Component({
  selector: 'app-secteur-activite',
  templateUrl: './secteur-activite.component.html',
  styleUrl: './secteur-activite.component.css',
})
export class SecteurActiviteComponent implements OnInit {
  secteursActivite: SecteurActivite[] = [];

  constructor(private secteurActiviteService: SecteurActiviteService) {}

  ngOnInit(): void {
    this.loadSecteursActivite();
  }

  loadSecteursActivite(): void {
    this.secteurActiviteService.getAllSecteurActivites().subscribe(
      (data: SecteurActivite[]) => {
        this.secteursActivite = data; // Assigner les données récupérées à la variable
      },
      (error) => {
        console.error(
          "Erreur lors de la récupération des secteurs d'activité",
          error
        );
      }
    );
  }

  deleteSecteur(idSecteurActivite: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce secteur ?')) {
      this.secteurActiviteService
        .deleteSecteurActivite(idSecteurActivite)
        .subscribe(
          () => {
            this.secteursActivite = this.secteursActivite.filter(
              (secteur) => secteur.idSecteurActivite !== idSecteurActivite
            );
          },
          (error) => {
            console.error('Erreur lors de la suppression du secteur', error);
          }
        );
    }
  }
}
