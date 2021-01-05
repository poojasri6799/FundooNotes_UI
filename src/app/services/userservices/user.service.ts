import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService ) { }

  // registration(data : any){
  //   return  this.httpService.post('UserAccount/Register',data)
  //   }
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

  resetpass(user:any) {
    console.log("user service called");
    return this.httpService.post(`${this.baseUrl}UserAccount/ResetPassword`, user);
  }
}
