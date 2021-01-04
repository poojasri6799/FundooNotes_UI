import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  registration(data : any){
    return  this.httpService.post('UserAccount/Register',data)
  
    }
}
