import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  selectedActivationKey: any;
  activationKeysResponse: any;

  constructor() { }
}
