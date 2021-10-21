import { Component, OnInit, ElementRef} from '@angular/core';
import * as moment from 'moment';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbCarouselConfig],

})
export class DashboardComponent implements OnInit {

  public Todaydate: string;
  public NextDate: any;
  public AfterNextDate: any;
  public TodayTime: string;
  public TodayDay: string;
  public EST: any;
  public CST: any;
  public MST: any;
  public PST: any;
  public NextDay:any;
  public AfterNextDay: any;
  index: number = 0;
  public weather: any = [];
  url: any = 'https://api.weatherapi.com/v1/current.json?key=4cc405a9158944ce83b155933212010&q=Vizianagaram';

  showNavigationArrows = true;
  showNavigationIndicators = false;
  

  images = ['1.png', '2.png', '3.png', '4.png', '6.png', '7.png', 'aa.png', 'ab.png', 'ac.png', 'ad.png', 'a.png', 'b.png','CSP_9510.JPG', 'CSP_9675.JPG', 'CSP_9980.JPG']
  .map((n) => `https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2020/April/${n}`);



  constructor(
    private elRef: ElementRef,
    config: NgbCarouselConfig,
    private _http: HttpClient,
    ) 
    
    {config.showNavigationArrows = true; config.showNavigationIndicators = true;}


  ngOnInit(): void {
    this.Todaydate = moment().format('MMM Do YYYY');
    this.NextDate = moment().add(1, 'day').format('MMM Do YYYY');
    this.AfterNextDate = moment().add(2, 'days').format('MMM Do YYYY');
    this.TodayTime = moment().format('hh:mm a');
    this.TodayDay = moment().format('dddd');
    this.NextDay = moment().add(1, 'day').format('dddd');
    this.AfterNextDay = moment().add(2, 'days').format('dddd');
    this.EST = moment().subtract(9, 'hours').subtract(30, 'minutes').format('hh:mm a');
    this.CST = moment().subtract(10, 'hours').subtract(30, 'minutes').format('hh:mm a');
    this.MST = moment().subtract(11, 'hours').subtract(30, 'minutes').format('hh:mm a');
    this.PST = moment().subtract(12, 'hours').subtract(30, 'minutes').format('hh:mm a')


    this._http
    .get<any>(this.url)
    .subscribe((response: any) => {
      this.weather = response.current;
      this.weather = Array.of(this.weather);
    }, 
    (error: any) => {
        console.log(error);
        alert("Error");
      });


  }



}


