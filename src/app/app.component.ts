import { Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'demoPage';

  public closeResult: any;

  constructor(
     private modalService: NgbModal,
     private http: HttpClient,
     private router: Router,
  ) 
  {}

 

  open(content: any) {
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


  getIMDBData() {
    return this.http
    .get<any>('http://www.omdbapi.com/?apikey=c9eb6503&s=car')
    .subscribe((response) => {
      alert(response);
      console.log(response);
    }, (error) => {
      console.log(error);
      alert("Error");
    });
  }


  dataLoad(){
    this.router.navigateByUrl('/dataLoad');
  }

  profile(){
    this.router.navigateByUrl('/Profile');
  }

}

