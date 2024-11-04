import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SecteurActivite } from '../Model/Secteur-activite';
@Injectable({
  providedIn: 'root',
})
export class SecteurActiviteService {
  readonly API_URL = environment.url + '/secteurActivite';

  constructor(private httpClient: HttpClient) {}

  getAllSecteurActivites(): Observable<SecteurActivite[]> {
    // Indiquer le type de retour
    return this.httpClient.get<SecteurActivite[]>(
      `${this.API_URL}/retrieve-all-secteurActivite`
    );
  }

  addSecteurActivite(
    secteurActivite: SecteurActivite
  ): Observable<SecteurActivite> {
    return this.httpClient.post<SecteurActivite>(
      `${this.API_URL}/add-secteurActivite`,
      secteurActivite
    );
  }

  editSecteurActivite(
    secteurActivite: SecteurActivite
  ): Observable<SecteurActivite> {
    return this.httpClient.put<SecteurActivite>(
      `${this.API_URL}/modify-secteurActivite`,
      secteurActivite
    );
  }

  deleteSecteurActivite(idSecteurActivite: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.API_URL}/remove-secteurActivite/${idSecteurActivite}`
    );
  }
  getSecteurActiviteById(id: number) {
    return this.httpClient.get<SecteurActivite>(
      `${this.API_URL}/retrieve-secteurActivite/${id}`
    );
  }
}
