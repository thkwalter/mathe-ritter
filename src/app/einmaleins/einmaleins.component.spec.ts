import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { EinmaleinsComponent } from './einmaleins.component';

describe('EinmaleinsComponent', () => {
  let component: EinmaleinsComponent;
  let fixture: ComponentFixture<EinmaleinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinmaleinsComponent ],
      imports:
      [
        FormsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinmaleinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
