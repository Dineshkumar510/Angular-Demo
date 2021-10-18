import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
  selector: 'app-esearch',
  templateUrl: './esearch.component.html',
  styleUrls: ['./esearch.component.css'],
})
export class EsearchComponent implements OnInit {

  public Employees: any = [];

  constructor(
    private EmployeeData: EmployeesDataService,
  ) 
  { 

    EmployeeData.users()
    .subscribe(
      (data: any): void => {
        this.Employees = data.results[0].name;
        console.log(data.results[0].name);
      },
      (error: any) => {
        console.log(error);
        alert(error);
      });


  }

  ngOnInit(): void {
  }

  


  // getSearchData() {
  //   return this.http
  //   .get<any>(this.url)
  //   .subscribe((response: any): void => {
  //     this.Employees = response.results[0];
  //     alert(response.results[0]);
  //     console.log(response.results[0]);
  //   }, 
  //   (error: any) => {
  //       console.log(error);
  //       alert("Error");
  //     });
  // }

}
