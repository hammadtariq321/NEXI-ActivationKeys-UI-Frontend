import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  defaultSelectedActivationKey: any ={}
  selectedActivationKey: any = {
      "id": 851169723432,
      "activationKey": "NexiHB9092772QMD",
      "status": false,
      "macAddress": null,
      "ipAddress": null,
      "license_name": "NEXI Home Basic",
      "date": null,
      "expired": "21/07/2023"
  }
  // selectedActivationKey: any;
  activationKeysResponse: any;

  constructor() { }
}
