import { Component, Injectable, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


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

  isChecked:boolean = false;
  closeResult = '';
  modalRef?: BsModalRef;

  items = ['INSTRUCTIONS'];
  item1 = ['TAX EXEMPTION CATEGORIES'];
  expandedIndex = 0;

  model: NgbDateStruct;
  date: {year: number, month: number};
  downloads: any;
  url: any;
  browser: any;

  constructor(
    private http: HttpClient,
    private ngbCalendar: NgbCalendar, 
    private dateAdapter: NgbDateAdapter<string>,
    private modalService: NgbModal,
    private modalServices: BsModalService,
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
   const Download = this.browser.downloads.download({url: "http://www.africau.edu/images/default/sample.pdf"});
   return Download;
  }

  
  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalServices.show(template);
  }

  toggleshow(): void{
    this.isChecked = ! this.isChecked;
  }
  

}
