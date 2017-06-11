import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFiltersMenuComponent } from './graph-filters-menu.component';

describe('GraphFiltersMenuComponent', () => {
  let component: GraphFiltersMenuComponent;
  let fixture: ComponentFixture<GraphFiltersMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphFiltersMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphFiltersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
