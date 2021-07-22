import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = environment.userUrl;
  private currentUser:User|undefined;
  private logged = false;
  constructor(private http: HttpClient) {}

  createUser(_email:string, _password:string): Observable<User>{
    return this.http.post<User>(this.userUrl,{
      email: _email,
      password: _password,
      isAdmin: false
    });
  }

  logUser(_connect:boolean, _email:string, _password:string): Observable<any>{
    // console.log(`(client:usersService:logUser) ---> ${_connect},${_email},${_password}`)
    if (!_password) _password = "";
    const url = `${this.userUrl}/log`;
    return this.http.post<any>(url,{
      connect: _connect,
      email: _email,
      password: _password
    });
  }

  setCurrentUser(_user:User){
    if(this.logged===false)
      this.currentUser = _user;
    this.logged = true;
  }

  getCurrentUser(){
    if (this.currentUser!= undefined && this.logged === true)
      return this.currentUser;
    return null;
  }

  setLogged(isLogged:boolean){
    this.logged = isLogged;
  }
}
