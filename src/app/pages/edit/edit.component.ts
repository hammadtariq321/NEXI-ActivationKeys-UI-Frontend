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
  versionList = ['Nexi160', 'Nexi200v3', 'Nexi200v5', 'Nexi221', 'Nexi222', 'Nexi230', 'Nexi240']
  typeList = ['Client', 'Test', 'Sales Partner']
  status = [true, false]
  expiredate: any;

  durationInSeconds = 5;
  spinner: any = false;
  constructor(private storage: StorageService, private route: Router, private api: ApiService, private _snackBar: MatSnackBar) {
  }
  
  ngOnInit(): void {
    this.licenseForm = this.storage.selectedActivationKey
    this.licenseFormOrigional = this.storage.selectedActivationKey
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


  update() {
    this.spinner = true
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
        this.api.UpdateUserLogs(`License Form Updated From ${JSON.stringify(this.licenseFormOrigional)} to ${JSON.stringify(this.licenseForm)}`)
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
