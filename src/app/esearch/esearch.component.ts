import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-esearch',
  templateUrl: './esearch.component.html',
  styleUrls: ['./esearch.component.css'],
})
export class EsearchComponent implements OnInit {

  public Employees: any = [];
  public url: any = 'https://randomuser.me/api/';

  constructor(
    private http: HttpClient,
  ) 
  { }

  ngOnInit(): void {
  }

  

  getSearchData() {
    return this.http
    .get<any>(this.url)
    .subscribe((response: any) => {
      this.Employees = response;
      console.log(response.results[0]);
    }, 
    (error: any) => {
        console.log(error);
        alert("Error");
      });
  }

}
