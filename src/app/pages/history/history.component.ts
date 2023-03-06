import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  response: any;
  users: any;
  spinner: boolean = false;

  constructor(private api: ApiService, private helper: HelperService, private route: Router) { }

  ngOnInit(): void {
    let userId = this.helper.getUserId();
    if (userId === '4') {
      this.spinner = true;
      this.api.GetUsersList().subscribe(
        (res: any) => { 
          this.users = res;
          this.spinner = false;
        },
        (err: any) => { 
          console.log(err)
          this.spinner = false;
        }
      )
    } else {
      this.route.navigateByUrl('/home');
    }
   
  }

  getUserLog (user:any) {
    this.spinner = true;
    this.api.GetUserLogs(user).subscribe(
      (res: any) => { 
        this.response = res;
        this.spinner = false;
       },
      (err: any) => { 
        console.log(err)
        this.spinner = false;
      }
    )
  }
  

}
