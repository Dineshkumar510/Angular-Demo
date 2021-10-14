import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsearchComponent } from './esearch.component';

describe('EsearchComponent', () => {
  let component: EsearchComponent;
  let fixture: ComponentFixture<EsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
