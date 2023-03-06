import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HelperService } from './helper.service';

// const headers = new HttpHeaders()
// .set('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://nexsusactivation.herokuapp.com'
  // api_url = 'https://nexsus-activation-backup.herokuapp.com'
  // api_url = 'http://127.0.0.1:8000' 

  httpHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: HttpClient, private helper: HelperService) { }

  GetUserToken(user: any) {
    return this.http.post(this.api_url + '/api-token-auth/', user)
  }
  
  GetActivationKeys() {
    return this.http.get(this.api_url + '/activation/')
  }
  
  GetUsersList() {  
    return this.http.get(this.api_url + '/users/')
  }
  
  UpdateActivationKey(id: number, body: any) {
    return this.http.put(this.api_url + '/activation/' + id + '/', body)
  }
  
  DeleteActivationKey(id: number) {
    return this.http.delete(this.api_url + '/activation/' + id + '/')
  }

  GetUserLogs(user: any) {
    return this.http.get(this.api_url + '/userlogs/?user=' + user )
  }
  UpdateUserLogs(log: any) {
    let body = {'user': this.helper.getUserId(), 'log': log};
    this.http.post(this.api_url + '/userlogs/', body).subscribe(
      (res: any) => { console.log(res)},
      (err: any) => { console.log(err)}
    )
  }

  CategoryTimeMatch(body:any) {
    return this.http.post(this.api_url + '/upload/', body )
  }

  ValidateFullBodyScan(body:any) {
    return this.http.post(this.api_url + '/fullbodyscan/', body )
  }
  
  ValidateTreatmentPrograms(body:any) {
    return this.http.post(this.api_url + '/treatmentprograms/', body )
  }

  ValidateImgFolder(body:any) {
    return this.http.post(this.api_url + '/imgfolder/',body )
  }

  ValidateFrequencyFolder(body:any) {
  return this.http.post(this.api_url + '/freqfolder/', body )
  }

  ChangePassword(user:any) {
    let body = `old_password=${user.old_password}&new_password=${user.new_password}`
    return this.http.put(this.api_url + '/change-password/', body, {headers: this.httpHeader})
  }

}
