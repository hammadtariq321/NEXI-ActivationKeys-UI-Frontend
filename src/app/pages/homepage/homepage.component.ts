import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogHTMLComponent } from 'src/app/components/dialog-html/dialog-html.component';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements  OnInit {

  activationKeys: any;
  

  spinner: any = true;
  
  displayedColumns: string[] = ['index', 'id', 'Key', 'License Name', 'MacAddress', 'IpAddress', 'Status', 'Date', 'Expired', 'Action'];

  constructor( private http: ApiService, public dialog: MatDialog, private route: Router, private storage: StorageService ) { }


  ngOnInit(): void {
    this.getActivationKeys()
  }

  getActivationKeys() {
    this.http.GetActivationKeys().subscribe(
      (res) => {
        this.spinner = false
        this.activationKeys = res
      },
      (err) => {
        console.log(err)
        alert('Internet Not Stable! Try Again Later')
      }
    )
  }

  editKey(data: any) {
    console.log(data)
    this.storage.selectedActivationKey = data
    if (this.storage.selectedActivationKey) {
      this.route.navigateByUrl('edit')
    }
  }

  deleteKey(data: any) {
    console.log(data)
    let dialogRef = this.dialog.open(DialogHTMLComponent, {data: {title: 'Delete?', subTitle: 'Sure want to delete?'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }


}
