import { Component } from '@angular/core';
import {FactureService} from '../../facture/facture.service';  // Correct Import

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  // Properties to capture the inputs from the form
  montantRemise: number = 0;
  montantFacture: number = 0;
  dateCreationFacture: string = '';
  dateDerniereModificationFacture: string = '';

  constructor(private factureService: FactureService) {}

  // Method to call when invoicing is submitted
  addFacture() {
    const newFacture = {
      montantRemise: this.montantRemise,
      montantFacture: this.montantFacture,
      dateCreationFacture: this.dateCreationFacture,
      dateDerniereModificationFacture: this.dateDerniereModificationFacture
    };

    // Call the factureService to send data to the backend
    this.factureService.addFacture(newFacture).subscribe(
      response => {
        console.log('Facture added successfully!', response);
      },
      error => {
        console.error('Error adding facture:', error);
      }
    );
  }
}