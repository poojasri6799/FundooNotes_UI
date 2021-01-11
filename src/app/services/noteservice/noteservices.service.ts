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


  getdata(token:any) {
    console.log(token);
    let options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }) }
    return this.httpService.get(`${this.baseUrl}Note`,true, options);
  }

  updateNote(token:any,data:any) {
    console.log(token);
    let options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }) }
    return this.httpService.put(`${this.baseUrl}Note/${data.noteId}`,data,true, options);
  }


  deleteNotes(data:any,token:any){
    console.log(token);
    let options = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }) }
    return this.httpService.delete(`${this.baseUrl}Note/${data.noteId}`, true, options);
  }
}


