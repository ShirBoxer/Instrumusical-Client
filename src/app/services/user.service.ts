import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Router } from '@angular/router';

const JWT_NAME = environment.JWT_NAME;
// Assistance interfaces
export interface UserDetails {
  _id: string;  
  email: string;
  name: string;
  isAdmin:boolean;
  exp: number; // expire at <millisecond timestep>
  iat: number; // issued at <millisecond timestep>
}

export interface TokenPayload {
  email: string;
  password: string;
  name: string;// <--- add question mark after colon if not working
}

// interface TokenResponse {
//   token: string;
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = environment.userUrl;
  private token: string;

  constructor(private http: HttpClient,
    private route: Router) { this.token = ""; }

  // @@@@@@@@@ Private methods @@@@@@@@@

  // Token methods
  private saveToken(_token: string): void {
    window.localStorage.setItem(JWT_NAME, _token);
    this.token = _token
  }
  private getToken(): string {
    if (!this.token) {
      let _token = window.localStorage.getItem(JWT_NAME)
      if (_token) this.token = _token;
    } return this.token;
  }

  // Make an http request method
  private request(_method: 'get' | 'post', _type: 'login' | 'register' | 'profile', _user?: TokenPayload): Observable<any> {
    let base!: Observable<any>;
    if (_method === 'post') base = this.http.post(`${this.userUrl}/${_type}`, _user);
    else if (_method === 'get') base = this.http.get(`/api/${_type}`, { "headers": { "Authorization": `Bearer ${this.getToken()}` } });
    // base.subscribe((_data) => {if(_data.token) this.saveToken(_data.token);});// differ from tutorial: check "https://www.sitepoint.com/user-authentication-mean-stack/" at "Structuring the API Calls"
    return base;
  }
  

  // @@@@@@@@@ Public methods @@@@@@@@@

  // -- Actions --
  
  public register(_user: TokenPayload): Observable<any> {
    return this.request('post', 'register', _user);
  }
  
  public login(_user: TokenPayload): Observable<any> {
    return this.request('post', 'login', _user);
  }
  
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem(JWT_NAME);
    this.route.navigateByUrl('/');
  }
  
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

   // -- Details --

   public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    return user ? (user.exp > (Date.now() / 1000)) : false;
  }

  public getUserDetails(): UserDetails | null {
    const token = this.getToken();
    if (!token) return null;
    let payload = token.split('.')[1];
    payload = window.atob(payload);
    return JSON.parse(payload);
  }

  isAdmin():boolean{
    if ( !this.isLoggedIn() ) return false;
    let userDetails = this.getUserDetails();
    return (userDetails!=null) ? (userDetails.isAdmin) : (false);
  }

}
