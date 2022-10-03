import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-validate-imgfolder',
  templateUrl: './validate-imgfolder.component.html',
  styleUrls: ['./validate-imgfolder.component.scss']
})
export class ValidateImgfolderComponent implements OnInit {


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
    this.api.ValidateImgFolder(formData).subscribe(
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
