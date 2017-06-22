import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonMenuComponent } from './button-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('ButtonMenuComponent', () => {
  let component: ButtonMenuComponent;
  let fixture: ComponentFixture<ButtonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [ ButtonMenuComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
