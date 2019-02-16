import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () =>
{
   let component: AppComponent;
   let fixture: ComponentFixture<AppComponent>;

   beforeEach(() =>
   {
      TestBed.configureTestingModule
      ({
         declarations:
            [
            AppComponent,
            EinmaleinsComponentMock
            ],
         schemas:
            [
            CUSTOM_ELEMENTS_SCHEMA
            ]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
   });

// =====================================================================================================================

   it('startet', () =>
   {
      expect(component).toBeDefined();
   });

// =====================================================================================================================

   it('zeigt in der Toolbar den Titel Mathe-Ritter an', () =>
   {
      fixture.detectChanges();
      const wurzelElement : HTMLElement = fixture.debugElement.nativeElement;
      expect(wurzelElement.querySelector('mat-toolbar span#titel').textContent).toBe('Mathe-Ritter');
   });
});

// =====================================================================================================================
// =====================================================================================================================

@Component
({
  selector: 'einmaleins',
  template: ''
})
class EinmaleinsComponentMock {}
