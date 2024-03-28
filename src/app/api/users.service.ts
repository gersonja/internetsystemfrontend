import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private readonly _http = inject(HttpClient);

  getUser(): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    return this._http.get(`https://localhost:7102/api/User`);
  }
  postUser(
    username: string,
    email: string,
    password: string,
   
    
    ): Observable<any> {
    const body = {
      
      username: username,
      email: email,
      password: password,
      rolRolid: 2,
      userstatusStatusid:'ACT'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._http.post('https://localhost:7102/api/User/', body, { headers: headers });
  }
}
