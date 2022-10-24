import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import csvDownload from 'json-to-csv-export'

const ipAddressesData = [
  {
    id: "1",
    name: "Sarajane Wheatman",
    ip: "40.98.252.240"
  },
  {
    id: "2",
    name: "Linell Humpherston",
    ip: "82.225.151.150"
  }
]

@Component({
  selector: 'app-validate-treatmentprograms',
  templateUrl: './validate-treatmentprograms.component.html',
  styleUrls: ['./validate-treatmentprograms.component.scss']
})
export class ValidateTreatmentprogramsComponent implements OnInit {

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
    this.api.ValidateTreatmentPrograms(formData).subscribe(
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

  downloadCSVReport() {
    const dataToConvert = {
      data: this.response.programsInClientDb,
      filename: 'treatment_program_report',
      delimiter: ',',
      // headers: ['IP', "Full Name", "IP Address"]
    }
    csvDownload(dataToConvert)
  }

}
