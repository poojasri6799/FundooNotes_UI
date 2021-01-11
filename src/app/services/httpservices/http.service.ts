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

  post(url:any, user:any) { 
    console.log(user);
    return this.http.post(url, user)
  }

  post1(url:any, data:any, isHeaderRequired:any = false, headers:any = null) {
    return this.http.post(url, data, isHeaderRequired && headers)
  }

  get(url:any, isHeaderRequired:any = false, headers:any = null) {
    return this.http.get(url, isHeaderRequired && headers)
  }

  put(url:any, data:any, isHeaderRequired:any = false, headers:any = null) {
    return this.http.put(url, data, isHeaderRequired && headers)
  }

  delete(url:any,isHeaderRequired:any = false, headers:any = null) {
    return this.http.delete(url,isHeaderRequired && headers)
  }
}
