import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements  OnInit {

  // activationKeys: any = [
  //   {
  //     "id": 3676982,
  //     "activationKey": "NexiHB7856985ATF",
  //     "status": false,
  //     "macAddress": null,
  //     "ipAddress": null,
  //     "license_name": "NEXI Home Basic",
  //     "date": null,
  //     "expired": "21/07/2023"
  // },
  //   {
  //     "id": 3676982,
  //     "activationKey": "NexiHB7856985ATF",
  //     "status": false,
  //     "macAddress": null,
  //     "ipAddress": null,
  //     "license_name": "NEXI Home Basic",
  //     "date": null,
  //     "expired": "21/07/2023"
  // },
  //   {
  //     "id": 3676982,
  //     "activationKey": "NexiHB7856985ATF",
  //     "status": false,
  //     "macAddress": null,
  //     "ipAddress": null,
  //     "license_name": "NEXI Home Basic",
  //     "date": null,
  //     "expired": "21/07/2023"
  // },
  //   {
  //     "id": 3676982,
  //     "activationKey": "NexiHB7856985ATF",
  //     "status": false,
  //     "macAddress": null,
  //     "ipAddress": null,
  //     "license_name": "NEXI Home Basic",
  //     "date": null,
  //     "expired": "21/07/2023"
  // },
  // ];

  activationKeys: any;

  
  displayedColumns: string[] = ['id', 'Key', 'License Name', 'MacAddress', 'IpAddress', 'Status', 'Date', 'Expired'];

  constructor( private http: ApiService ) { }


  ngOnInit(): void {
    this.getActivationKeys()
  }

  getActivationKeys() {
    this.http.GetActivationKeys().subscribe(
      (res) => {
        this.activationKeys = res
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
