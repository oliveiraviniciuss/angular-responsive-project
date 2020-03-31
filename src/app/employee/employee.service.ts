
import { Injectable} from '@angular/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs'
import { IEmployee } from './employee.model';


@Injectable()
export class EmployeeService{
    constructor(private http: HttpClient) {}

    public url = 'http://www.mocky.io/v2/5e80a5853000000d006f952d'
    getEmployees(): Observable<IEmployee[]> {
        console.log(this.http.get<IEmployee[]>(this.url))
        return this.http.get<IEmployee[]>(this.url);
        
    }
}

