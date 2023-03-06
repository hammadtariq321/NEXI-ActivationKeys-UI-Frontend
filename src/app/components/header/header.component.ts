import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userid: any;
  
  constructor(private route: Router, private helper: HelperService) { }

  ngOnInit(): void {
   this.userid =  this.helper.getUserId()
  }

  logout() {
    localStorage.clear()
    this.route.navigateByUrl('/login')
  }
}
