import { Component,OnInit } from '@angular/core';
import { StockService } from '../shared/Service/Stock.service';
import { Stock } from '../shared/Model/Stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit(): void {
    this.getStocks();
  }
  editStock(idStock: number): void {
    this.router.navigate(['/edit-stock', idStock]);
  }
  getStocks(): void {
    this.stockService.getAllStocks().subscribe(
      (data: Stock[]) => {
        this.stocks = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des stocks', error);
      }
    );
  }
  deleteStock(idStock: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce stock ?')) {
      this.stockService.deleteStock(idStock).subscribe(
        () => {
          console.log('Stock supprimé avec succès');
          this.getStocks(); // Mettre à jour la liste des stocks après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du stock', error);
        }
      );
    }
  }
 
}