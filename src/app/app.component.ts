
import { OnInit, Component, ViewChild } from '@angular/core';
import { EmployeeService } from "./employee/employee.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog/';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-project'
  public employees = [];
  config: any;
  constructor(private _employeeService: EmployeeService, private dialog: MatDialog) {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 31
    };
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
      this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);  
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  public openModal() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.position = {
      top: "0",
      right: "0"
    }
    dialogConfig.height = "100%"
    dialogConfig.width = "100%"
    dialogConfig.maxHeight = "100vh"
    dialogConfig.maxWidth = '40vw'
    dialogConfig.panelClass = 'mat-dialog-container-override'
    this.dialog.open(MyDialogComponent, dialogConfig);
   
  }
}