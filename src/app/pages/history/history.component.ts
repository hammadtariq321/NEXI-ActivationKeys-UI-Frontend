import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  response: any;
  users: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.GetUsersList().subscribe(
      (res: any) => { this.users = res; },
      (err: any) => { console.log(err)}
    )
   
  }

  getUserLog (user:any) {
    this.api.GetUserLogs(user).subscribe(
      (res: any) => { this.response = res; },
      (err: any) => { console.log(err)}
    )
  }
  

}
