import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password = {
    "old_password": "",
    "new_password": "",
  }

  spinner:boolean = false;
  constructor( private route: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.route.navigateByUrl('/home')
  }

  update() {
    this.api.ChangePassword(this.password).subscribe(
      (res: any) => {
        console.log(res);
        alert("Password changed successfully.");
        this.route.navigateByUrl('/home')
      },
      (err) => {
        console.log(err);
        if (err.error.old_password){
          alert(err.error.old_password[0]);
        }
        if (err.error.new_password){
          // alert("Password changed successfully.");
          alert(err.error.new_password[0]);
        }
      }
    )
  }

}
