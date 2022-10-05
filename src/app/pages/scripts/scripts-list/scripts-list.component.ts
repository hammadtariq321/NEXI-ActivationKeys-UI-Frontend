import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts-list',
  templateUrl: './scripts-list.component.html',
  styleUrls: ['./scripts-list.component.scss']
})
export class ScriptsListComponent implements OnInit {

  scriptsList = [
    {'name':'Category And Time Match', 'link': 'category-and-time-match'},
    {'name':'Full Body Scan', 'link': 'validate-fullbodyscan'},
    {'name':'Validate Images Folder', 'link': 'validate-imgfolder'},
    {'name':'Validate Frequency Folder', 'link': 'validate-frequencyfolder'},
    {'name':'Validate Treatment Programs', 'link': 'validate-treatmentprograms'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
