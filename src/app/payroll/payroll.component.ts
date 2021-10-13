import { Component, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}


@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})

export class PayrollComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  downloads: any;
  url: any;

  constructor(
    private http: HttpClient,
    private ngbCalendar: NgbCalendar, 
    private dateAdapter: NgbDateAdapter<string>,
    ) { }

  public model2: string;
  
  ngOnInit(): void {
  }

  //calendar on format dd/mm/yy
  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  //data load
  getIMDBData() {
    return this.http
    .get<any>('http://www.omdbapi.com/?apikey=c9eb6503&s=car')
    .subscribe((response: any): void => {
      alert("No any Update");
      console.log(response);
    }, (error: any) => {
      console.log(error);
      alert("Error");
    });
  }

  //download
  download(): void {
   return this.downloads
    .download('https://i.pinimg.com/736x/5b/5e/0f/5b5e0f5704e4715a76a50e096722fa8d.jpg')
    .subscribe((blob: string | Blob) =>{
      saveAs(blob, 'file')
    })
  }

  

}
