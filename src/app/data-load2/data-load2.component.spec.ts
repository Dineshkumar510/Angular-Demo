import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoad2Component } from './data-load2.component';

describe('DataLoad2Component', () => {
  let component: DataLoad2Component;
  let fixture: ComponentFixture<DataLoad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLoad2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
