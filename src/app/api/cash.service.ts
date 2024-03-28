import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor() { }
  private readonly _http = inject(HttpClient);

  
  postCash(description: string): Observable<any> {
    const body = {
      "description": description,
      "active": 'A'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post('https://localhost:7102/api/Cash/', body, { headers: headers });
  }
}
