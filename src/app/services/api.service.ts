import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://nexsusactivation.herokuapp.com'

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


}
