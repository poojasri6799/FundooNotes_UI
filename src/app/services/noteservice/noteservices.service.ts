import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  constructor(private httpService:HttpService) { }

  baseUrl = environment.baseUrl;

  add(noteData:any, token:any) {
    let options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }) }
    return this.httpService.post1(`${this.baseUrl}Note`, noteData, true, options);
  }
}


