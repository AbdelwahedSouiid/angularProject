import {Injectable} from '@angular/core';
import { Stock } from '../Model/Stock';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  

  export class StockService {
    readonly API_URL = environment.url + '/stock';
  
    constructor(private httpClient: HttpClient) {}
  
    getAllStocks(): Observable<Stock[]> {
      return this.httpClient.get<Stock[]>(`${this.API_URL}/retrieve-all-stocks`);
    }
  
    addStock(stock: Stock): Observable<Stock> {
      return this.httpClient.post<Stock>(`${this.API_URL}/add-stock`, stock);
    }
  
    editStock(stock: Stock): Observable<Stock> {
      return this.httpClient.put<Stock>(`${this.API_URL}/modify-stock`, stock);
    }
  
    deleteStock(idStock: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.API_URL}/remove-stock/${idStock}`);
    }
    getStockById(stockId: number): Observable<Stock> {
      return this.httpClient.get<Stock>(`${this.API_URL}/retrieve-stock/${stockId}`);
    }
  }