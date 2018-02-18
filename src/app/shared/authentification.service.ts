import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Constant } from '../shared/constant';

@Injectable()
export class AuthentificationService {

  public token: string;

  constructor(private http: Http) { }

  
  login(username: string, password: string): Observable<boolean> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(
      Constant.ApiRoot + Constant.TokenService,
      { Email: username, Password: password },
      { headers: headers })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        console.log(token);
        if (token) {
          this.token = token;
          window.alert("Successfully logged");
          return true;
        }
        else {
          window.alert("No persmission to log");
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
  }

  getUserLoggedIn() {
    if (this.token) 
      return true;
    return false;
  }
}