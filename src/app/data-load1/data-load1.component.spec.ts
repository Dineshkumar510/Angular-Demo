import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoad1Component } from './data-load1.component';

describe('DataLoad1Component', () => {
  let component: DataLoad1Component;
  let fixture: ComponentFixture<DataLoad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLoad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
