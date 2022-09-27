import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  licenseForm: any;
  licenseList = ['NEXI Home Basic', 'NEXI Home Complete', 'NEXI Home Family', 'NEXI Pro']

  durationInSeconds = 5;
  spinner: any = false;
  constructor(private storage: StorageService, private route: Router, private api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.licenseForm = this.storage.selectedActivationKey
    if (!this.licenseForm) {
      alert('Please Select Again')
      this.route.navigateByUrl('/home')
    }
  }

  update() {
    this.spinner = true
    console.log(this.licenseForm)
    let body = this.licenseForm
    this.api.UpdateActivationKey(body.id, body).subscribe(
      (res) => {
        console.log(res)
        this.openSnackBar()
        this.spinner = false
        this.route.navigateByUrl('/home')
      },
      (err) => {
        console.log(err)
        this.spinner = false
      }
    )
  }

  cancel() {
    this.route.navigateByUrl('/home')
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
