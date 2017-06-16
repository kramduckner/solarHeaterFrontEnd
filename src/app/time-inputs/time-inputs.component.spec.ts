import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputsComponent } from './time-inputs.component';

describe('TimeInputsComponent', () => {
  let component: TimeInputsComponent;
  let fixture: ComponentFixture<TimeInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
