import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../Model/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  // Direct URL to the API
  private apiUrl = 'http://192.168.91.128:8089/projet/fournisseur';

  constructor(private http: HttpClient) {}

  // Get all fournisseurs (API "/retrieve-all-fournisseurs")
  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.apiUrl}/retrieve-all-fournisseurs`);
  }

  // Get a fournisseur by ID (API "/retrieve-fournisseur/{id}")
  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiUrl}/retrieve-fournisseur/${id}`);
  }

  // Add a new fournisseur (API "/add-fournisseur")
  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.apiUrl}/add-fournisseur`, fournisseur);
  }

  // Edit a fournisseur (API "/modify-fournisseur")
  editFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiUrl}/modify-fournisseur`, fournisseur);
  }

  // Delete a fournisseur by ID (API "/remove-fournisseur/{id}")
  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-fournisseur/${id}`);
  }
}
