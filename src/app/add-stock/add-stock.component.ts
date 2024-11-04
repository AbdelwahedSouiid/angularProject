import { Component } from '@angular/core';
import { StockService } from '../shared/Service/Stock.service';
import { Stock } from '../shared/Model/Stock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  stock: Stock = new Stock();

  constructor(private stockService: StockService, private router: Router) {}

  addStock(): void {
    this.stockService.addStock(this.stock).subscribe(
      () => {
        console.log('Stock ajouté avec succès');
        this.router.navigate(['/stock']); // Retourne à la page des stocks après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du stock', error);
      }
    );
  }
}

