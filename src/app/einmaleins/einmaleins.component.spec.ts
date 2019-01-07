import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinmaleinsComponent } from './einmaleins.component';

describe('EinmaleinsComponent', () => {
  let component: EinmaleinsComponent;
  let fixture: ComponentFixture<EinmaleinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinmaleinsComponent ]
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
