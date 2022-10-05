import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogHTMLComponent } from 'src/app/components/dialog-html/dialog-html.component';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSuccessComponent } from 'src/app/components/snackbar-success/snackbar-success.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements  OnInit {

  activationKeys: any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  dataSource: any;

  spinner: any = true;
  durationInSeconds = 5;
  
  displayedColumns: string[] = ['id', 'Key', 'License Name', 'MacAddress', 'IpAddress', 'Status', 'Date', 'Expired', 'Action'];

  constructor( 
    private http: ApiService, 
    public dialog: MatDialog, 
    private route: Router, 
    private storage: StorageService,
    private _snackBar: MatSnackBar
    ) { 
    
  }
  
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    let keys = this.storage.activationKeysResponse
    console.log(keys)
    if (keys){
      this.dataSource = new MatTableDataSource(keys)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.spinner = false
    } else {
      setTimeout(() => {
        this.getActivationKeys()
      }, 5000);
    }
  }

  getActivationKeys() {
    this.http.GetActivationKeys().subscribe(
      (res) => {
        this.spinner = false
        this.activationKeys = res
        this.dataSource = new MatTableDataSource(this.activationKeys)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        this.storage.activationKeysResponse  = res
      },
      (err) => {
        console.log(err)
        alert('Internet Not Stable! Trying again :(')
        this.getActivationKeys()
      }
    )
  }
  
  filterChange(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue
  }

  editKey(data: any) {
    console.log(data)
    this.storage.selectedActivationKey = data
    if (this.storage.selectedActivationKey) {
      this.route.navigateByUrl('edit')
    }
  }

  deleteKey(data: any) {
    console.log(data)
    let dialogRef = this.dialog.open(DialogHTMLComponent, {data: {title: 'Delete?', subTitle: 'Sure want to delete?'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result == true) {
        this.http.DeleteActivationKey(data.id).subscribe(
          (res) => {
            this.openSnackBar()
            this.getActivationKeys()
          },
          (err) => {
            alert('Try Agin later')
            console.log(err)
          }
        )
      }
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarSuccessComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  

}
