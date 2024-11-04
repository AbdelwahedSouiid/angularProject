import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../shared/Service/Stock.service';
import { Stock } from '../shared/Model/Stock';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrl: './edit-stock.component.css'
})
export class EditStockComponent implements OnInit {
  stock: Stock = new Stock(); // Initialiser un objet Stock

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du stock à partir des paramètres de l'URL
    const stockId = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID en tant que chaîne
    if (stockId) {
      const id: number = +stockId; // Convertir l'ID en nombre
      this.stockService.getStockById(id).subscribe(
        (data: Stock) => {
          this.stock = data; // Assigner les données du stock récupéré
        },
        (error) => {
          console.error('Erreur lors de la récupération du stock', error);
        }
      );
    }
  }

  // Méthode pour mettre à jour le stock
  updateStock(): void {
    this.stockService.editStock(this.stock).subscribe(
      () => {
        console.log('Stock mis à jour avec succès');
        this.router.navigate(['/stock']); // Rediriger vers la liste des stocks après mise à jour
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du stock', error);
      }
    );
  }
}