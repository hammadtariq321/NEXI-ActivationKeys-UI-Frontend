import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getUserId() {
    return localStorage.getItem('user_id');
  }

}
