import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  response: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.GetUserLogs().subscribe(
      (res: any) => { this.response = res; },
      (err: any) => { console.log(err)}
    )
  }

  

}
