import { ComponentFixture, TestBed } from '@angular/core/testing';


import { BMSComponent } from './bms.component';

describe('BMSComponent', () => {
  let component: BMSComponent;
  let fixture: ComponentFixture<BMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
