import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  // URL of the Spring Boot backend
  private apiUrl = 'http://192.168.87.134:8089/projet/facture/add-facture';

  constructor(private http: HttpClient) {}

  // Method to add a facture (POST)
  addFacture(facture: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, facture, { headers });
  }
}