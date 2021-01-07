import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  constructor(private httpService:HttpService) { }
}

// baseUrl = environment.baseUrl;

//   addNotes(data:any) {
//     let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
//     return this.httpService.post(`${this.baseUrl}Notes/AddNote`, data, true, options);
// }
