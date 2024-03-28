import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  private readonly _http = inject(HttpClient);

  getMenu(): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.get(`https://localhost:7102/api/Menu`);
  }
  getMenuRol(rol:number): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.get(`https://localhost:7102/api/Menu/${rol}`);
  }
}
