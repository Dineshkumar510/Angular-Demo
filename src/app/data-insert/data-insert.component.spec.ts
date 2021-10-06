import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInsertComponent } from './data-insert.component';

describe('DataInsertComponent', () => {
  let component: DataInsertComponent;
  let fixture: ComponentFixture<DataInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
