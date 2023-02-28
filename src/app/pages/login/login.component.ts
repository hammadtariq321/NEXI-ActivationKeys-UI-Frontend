import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any;
  invalid: any = false;
  spinner: any = false;

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.user = {
      username: "",
      password: "",
    }
  }

  loginUser() {
    this.invalid = false;
    this.spinner = true
    let userdetail = this.user
    this.api.GetUserToken(userdetail).subscribe(
      (res: any) => {
        console.log(res)
        this.spinner = false
        localStorage.setItem('userToken', res.token)
        localStorage.setItem('user_id', res.id)
        this.route.navigateByUrl('/home')
      },
      (err) => {
        this.spinner = false
        console.log(err)
        if (err.error.non_field_errors) {
          this.invalid = true;
        } else  {
          alert('Something went wrong, Please try again')
        }
      }
    )
  }

}
