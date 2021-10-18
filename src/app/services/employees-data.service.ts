import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  public url: any = 'https://randomuser.me/api/';

  constructor(
    private http: HttpClient,
  ) { }

  users(){
    return this.http.get(this.url);
  }
}
