import { Component} from '@angular/core';
import {ChangeDetectionStrategy, ViewChild, TemplateRef,} from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';
import * as moment from 'moment';


const colors: any = {
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  }
};


@Component({
  selector: 'app-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent{

  items: any  = ['THIS WEEK'];
  items1: any = ['HOLIDAYS'];
  items2: any = ['BIRTHDAYS'];
  items3: any = ['LEAVES'];

  
  expandedIndex = 0;
 


  @ViewChild('modalContent', { static: true }) modalContent: 
  TemplateRef<any>;


  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: moment("1/1/2021", "DD/MM/YYYY").toDate(),
      end: moment("1/1/2021", "DD/MM/YYYY").toDate(),
      title: 'New Year’s Day',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("2/4/2021", "DD/MM/YYYY").toDate(),
      end: moment("2/4/2021", "DD/MM/YYYY").toDate(),
      title: 'Good Friday',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("31/5/2021", "DD/MM/YYYY").toDate(),
      end: moment("31/5/2021", "DD/MM/YYYY").toDate(),
      title: 'Memorial Day',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("5/7/2021", "DD/MM/YYYY").toDate(),
      end: moment("5/7/2021", "DD/MM/YYYY").toDate(),
      title: 'Independence Day - Recognized',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("6/9/2021", "DD/MM/YYYY").toDate(),
      end: moment("6/9/2021", "DD/MM/YYYY").toDate(),
      title: 'Labor Day',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("25/11/2021", "DD/MM/YYYY").toDate(),
      end: moment("25/11/2021", "DD/MM/YYYY").toDate(),
      title: 'Thanksgiving Day',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("26/11/2021", "DD/MM/YYYY").toDate(),
      end: moment("26/11/2021", "DD/MM/YYYY").toDate(),
      title: 'Thanksgiving – Day After',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("24/12/2021", "DD/MM/YYYY").toDate(),
      end: moment("24/12/2021", "DD/MM/YYYY").toDate(),
      title: 'Christmas Eve',
      color: colors.blue,
      allDay: true,
    },
    {
      start: moment("31/12/2021", "DD/MM/YYYY").toDate(),
      end: moment("31/12/2021", "DD/MM/YYYY").toDate(),
      title: 'New Year’s Day eve',
      color: colors.blue,
      allDay: true,
    },
    
    
  ];

  activeDayIsOpen: boolean = true;


  constructor(private modal: NgbModal) {}

  //ngOnInit(): void {
  //throw new Error('Method not implemented.');
  //}

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  
  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen = false;
  }
}
 

