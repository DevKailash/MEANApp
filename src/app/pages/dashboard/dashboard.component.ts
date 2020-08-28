import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http/http.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees:any;
  constructor(private httpClient:HttpService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  async getEmployees(){
    await this.httpClient.getData('employees')
      .subscribe((res: any) =>{
        let response:any;
        console.log(res);
        this.employees = res;
    } );
  }
}
