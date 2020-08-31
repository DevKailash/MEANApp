import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees:any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;

  constructor(private httpClient:HttpService, private _formBuilder: FormBuilder) { }
  employeeDetails = {
    "employee": {
      "name": "kailash",
      "gender": "male",
      "designation": "Mobile developer"
    },
    "personal_Info": {
      "father_name": "natesh",
      "family_no": 4,
      "tel": 12346,
      "email": "kailash@gmail.com",
      "personal_contact": 9790313323,
      "emergency_contact": 13456789
    },
    "office_Info": {
      "empId": "12A2",
      "ctc": "xxxx",
      "deskId": "12",
      "extention": "ascsac",
      "assetId": "1235"
    },
    "address": {
      "adressLine1": "xyz",
      "adressLine2": "xyz",
      "pin": "1235",
      "city": "bangalore",
      "landmark": "karnataka"
    },
    "education_info": {
      "X_score": "99",
      "xII_score": "99",
      "garduation_type": "zxy",
      "garduation_score": "99",
      "master_type": "zxy",
      "master_score": "98"
    }
  }
  ngOnInit(): void {
    this.getEmployees();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  async getEmployees(){
    await this.httpClient.getData('employees')
      .subscribe((res: any) =>{
        let response:any;
        console.log(res);
        this.employees = res;
    } );
  }
  async postEmployee(){
    await this.httpClient.postDetails('employees',this.employeeDetails)
      .subscribe((res: any) =>{
        console.log(res);
    } );
  }
}
