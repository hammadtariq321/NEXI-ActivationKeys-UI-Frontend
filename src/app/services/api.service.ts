import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HelperService } from './helper.service';

// const headers = new HttpHeaders()
// .set('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // api_url = 'https://nexsusactivation.herokuapp.com'
  // api_url = 'https://nexsus-activation-backup.herokuapp.com'
  api_url = 'http://127.0.0.1:8000' 


  constructor(private http: HttpClient, private helper: HelperService) { }

  GetUserToken(user: any) {
    return this.http.post(this.api_url + '/api-token-auth/', user)
  }
  
  GetActivationKeys() {
    return this.http.get(this.api_url + '/activation/')
  }
  
  UpdateActivationKey(id: number, body: any) {
    return this.http.put(this.api_url + '/activation/' + id + '/', body)
  }
  
  DeleteActivationKey(id: number) {
    return this.http.delete(this.api_url + '/activation/' + id + '/')
  }

  GetUserLogs() {
    return this.http.get(this.api_url + '/userlogs/')
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

}
