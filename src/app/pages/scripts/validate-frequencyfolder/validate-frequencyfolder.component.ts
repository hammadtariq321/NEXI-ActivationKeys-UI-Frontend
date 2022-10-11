import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-validate-frequencyfolder',
  templateUrl: './validate-frequencyfolder.component.html',
  styleUrls: ['./validate-frequencyfolder.component.scss']
})
export class ValidateFrequencyfolderComponent implements OnInit {


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
    let freqArray: any[] = []
    if (event.target.files.length > 0){
      let files = event.target.files;
      console.log(files)
      for (let f of files) {
        console.log(f.name)
        freqArray.push(f.name)
      }
    }  
    this.fileselected = true
    this.spinner = true
    // let file = event.target.files[0]
    // console.log(file)
    // let formData = new FormData(); 
    // formData.append('file_uploaded', file); 
    setTimeout(() => {
      this.api.ValidateFrequencyFolder({'freq': freqArray}).subscribe(
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
    }, 8000);
  }

}
