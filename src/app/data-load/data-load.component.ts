import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-data-load',
  templateUrl: './data-load.component.html',
  styleUrls: ['./data-load.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DataLoadComponent implements OnInit {
  
  ngOnInit(): void {
  }

  
  public closeResult: any;

  constructor(
     private modalService: NgbModal
  ) 
  {}

 

  opened(content: any) {
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


}
