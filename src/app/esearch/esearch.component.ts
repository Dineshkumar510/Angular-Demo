import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-esearch',
  templateUrl: './esearch.component.html',
  styleUrls: ['./esearch.component.css'],
})
export class EsearchComponent implements OnInit {

  public Employees: any = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }


  getSearchData() {
    return this.http
    .get<any>('https://randomuser.me/api/')
    .subscribe((response: any) => {
      this.Employees = response.object;

      alert(response.object);
      console.log(response);
    }, 
    (error: any) => {
      console.log(error);
      alert("Error"); 
    });
  }

}
