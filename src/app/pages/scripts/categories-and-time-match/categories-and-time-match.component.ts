import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories-and-time-match',
  templateUrl: './categories-and-time-match.component.html',
  styleUrls: ['./categories-and-time-match.component.scss']
})
export class CategoriesAndTimeMatchComponent implements OnInit {

  fileselected:any = false;
  spinner:any = false;

  response:any;
  

  constructor(
    private api: ApiService
  ) { }


  ngOnInit(): void {
  }
  
  fileResponse(event: any) {
    this.fileselected = true
    this.spinner = true
    let file = event.target.files[0]
    console.log(file)
    let formData = new FormData(); 
    formData.append('file_uploaded', file); 
    this.api.CategoryTimeMatch(formData).subscribe(
      (res) => {
        console.log(res)
        this.spinner = false
        this.response = res
      }, 
      (err)=> {
        console.log(err)
        this.spinner = false
      }
    )
  }
}
