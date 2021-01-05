import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService ) { }
  
  baseUrl = environment.baseUrl;
  registration(user:any) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}UserAccount/Register`, user);
  }
  Login(user:any) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}UserAccount/Login`, user);
  }

  forgot(user:any) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}UserAccount/ForgetPassword`, user);
  }

  resetpass(user:any, token:any) {
    let options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }) }
    console.log("user service called");
    return this.httpService.post1(`${this.baseUrl}UserAccount/ResetPassword`, user, true, options);
  }
}
