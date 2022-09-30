import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

// const headers = new HttpHeaders()
// .set('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://nexsusactivation.herokuapp.com'
  // api_url = 'http://127.0.0.1:8000'


  constructor(private http: HttpClient) { }

  GetUserToken(user: any) {
    return this.http.post(this.api_url + '/api-token-auth/', user)
  }
  
  GetActivationKeys() {
    return this.http.get(this.api_url + '/activation/')
  }
  
  UpdateActivationKey(id: number, body: any) {
    return this.http.put(this.api_url + '/activation/' + id + '/', body)
  }

  CategoryTimeMatch(body:any) {
    return this.http.post(this.api_url + '/upload/', body )
  }

  ValidateFullBodyScan(body:any) {
    return this.http.post(this.api_url + '/fullbodyscan/', body )
  }

}
