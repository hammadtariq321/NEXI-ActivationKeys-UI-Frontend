import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-validate-fullbodyscan',
  templateUrl: './validate-fullbodyscan.component.html',
  styleUrls: ['./validate-fullbodyscan.component.scss']
})
export class ValidateFullbodyscanComponent implements OnInit {

  fileselected:any = false;
  spinner:any = false;
  panelOpenState = false;
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
    this.api.ValidateFullBodyScan(formData).subscribe(
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
