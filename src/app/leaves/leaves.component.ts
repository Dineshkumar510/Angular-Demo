import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDate} from "@ng-bootstrap/ng-bootstrap";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeavesComponent implements OnInit {

  constructor(private modalService: BsModalService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }

  fromDate!: NgbDate;
  toDate!: NgbDate;
  model!: NgbDateStruct;
  calendar!: NgbCalendar;
  selected = 'option1';
  modalRef?: BsModalRef;

  
  daysSelected: any[] = [];
  event: any;

  isSelected = (event: any) => {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);

    return this.daysSelected.find(x => x == date) ? "selected" : "";
   };

   select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x == date);
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);
  
    calendar.updateTodaysDate();
  }

  ngOnInit(): void {
  }


  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  bsValue = new Date();
  bsRangeValue: Date[] = [];
  maxDate = new Date();
  
}
