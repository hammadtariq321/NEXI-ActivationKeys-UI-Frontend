import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  licenseForm: any;
  licenseFormOrigional: any;
  licenseList = ['NEXI Home Transcend', 'NEXI Home Complete', 'NEXI Home Family', 'NEXI Home Advanced', 'NEXI Pro', 'NEXI Pro Animal']
  versionList = ['Nexi160', 'Nexi200v3', 'Nexi200v5', 'Nexi221', 'Nexi222', 'Nexi230', 'Nexi240', 'Nexi250']
  typeList = ['Client', 'Test', 'Sales Partner']
  status = [true, false]
  expiredate: any;

  durationInSeconds = 5;
  spinner: any = false;
  constructor(private storage: StorageService, private route: Router, private api: ApiService, private _snackBar: MatSnackBar) {
  }
  
  ngOnInit() {
    this.licenseForm = this.storage.selectedActivationKey
    this.licenseFormOrigional = {...this.licenseForm}
    if (!this.licenseForm) {
      alert('Please Select Again')
      this.route.navigateByUrl('/home')
    }
    // const currentDate = moment();
    
    // this.date = moment(this.licenseForm.expired).format('DD-MM-YYY');
    // this.date = new FormControl("2022-03-02")
    const convertDate = moment(this.licenseForm.expired, "DD/MM/YYYY").format("YYYY-MM-DD")
    this.expiredate = convertDate
    // this.date = new FormControl("2022-02-02") // YYYY-MM-DD
    console.log(this.expiredate)
    // console.log(this.date.value, this.licenseForm.expired)
  }

  compareObjects(obj1: any, obj2: any) {
    const differences: any = {};
  
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Find keys that are unique to obj1
    for (let key of keys1) {
      if (!keys2.includes(key)) {
        differences[key] = [obj1[key], undefined];
      }
    }
  
    // Find keys that are unique to obj2 or have different values
    for (let key of keys2) {
      if (!keys1.includes(key)) {
        differences[key] = [undefined, obj2[key]];
      } else if (obj1[key] !== obj2[key]) {
        differences[key] = [obj1[key], obj2[key]];
      }
    }
  
    return differences;
  }
  


  update() {
    this.spinner = true
    console.log('Before',this.licenseForm)
    console.log('After',this.licenseFormOrigional)
    const findChanges = this.compareObjects(this.licenseFormOrigional, this.licenseForm)
    // const body = this.licenseForm
    this.licenseForm.expired = moment(this.expiredate , "YYYY-MM-DD").format("DD/MM/YYYY")
    // body.expired = selectedDate
    console.log(this.licenseForm)
    // console.log(this.date.value)
    let body = this.licenseForm
    this.api.UpdateActivationKey(body.id, body).subscribe(
      (res) => {
        console.log(res)
        this.openSnackBar()
        this.spinner = false
        this.route.navigateByUrl('/home')
        this.api.UpdateUserLogs(`License Form Updated of License ${this.licenseForm.activationKey}: ${JSON.stringify(findChanges)}`)
      },
      (err) => {
        console.log(err)
        this.spinner = false
      }
    )
  }

  cancel() {
    this.route.navigateByUrl('/home')
    this.api.UpdateUserLogs(`Cencel Button CLicked amd Nvigating Back to Homepage`)
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
