import { Injectable, inject } from '@angular/core';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // constructor() { }

  private readonly _http = inject(HttpClient);

  postLogin(body: Login): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.post('https://localhost:7102/api/login', body, options);
  }


}
