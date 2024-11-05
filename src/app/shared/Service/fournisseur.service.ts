import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../Model/Fournisseur';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  readonly apiUrl = `${environment.url}/fournisseur`;

  constructor(private http: HttpClient) { }

  // Récupérer tous les fournisseurs
  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.apiUrl}/retrieve-all-fournisseurs`);
  }

  // Récupérer un fournisseur par ID
  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiUrl}/retrieve-fournisseur/${id}`);
  }

  // Créer un nouveau fournisseur
  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.apiUrl}/add-fournisseur`, fournisseur);
  }

  editFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiUrl}/modify-fournisseur`, fournisseur);
  }

  // Supprimer un fournisseur
  deleteFournisseur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-fournisseur/${id}`);
  }
}