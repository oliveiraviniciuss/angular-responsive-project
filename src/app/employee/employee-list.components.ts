import { OnInit, Component } from '@angular/core';
import { EmployeeService } from "./employee.service";

export class EmployeeListComponent implements OnInit{
    public employees = [];
    constructor(private _employeeService: EmployeeService) {}
    
    ngOnInit(){
        this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
            
    }

}