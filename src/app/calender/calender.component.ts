import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy, ViewChild, TemplateRef,} from '@angular/core';
import {startOfDay, subDays, addDays, endOfMonth} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';



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
export class CalenderComponent implements OnInit {

  items = ['THIS WEEK', 'HOILDAYS', 'BIRTHDAYS', 'LEAVES'];
  expandedIndex = 0;

 
  OnInit(): void {
   
  }

  

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
      start: subDays(startOfDay(new Date()), 0),
      end: addDays(new Date(), 0),
      title: 'A 3 day event',
      color: colors.blue,
      allDay: true,
    },
    
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 0),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    },
    
  ];

  activeDayIsOpen: boolean = true;


  constructor(private modal: NgbModal) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


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
 

