import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl
  constructor(private http: HttpClient) { }
  token:any;

  post(url:any, data:any) {
    return this.http.post(this.baseurl + url, data)
  }
}
