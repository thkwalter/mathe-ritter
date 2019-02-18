import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { EinmaleinsComponent } from './einmaleins.component';
import { Component } from '@angular/core';

describe('EinmaleinsComponent', () =>
{
   let component: EinmaleinsComponent;
   let fixture: ComponentFixture<EinmaleinsComponent>;
   let wurzelelement : HTMLElement;

   beforeEach(() =>
   {
      TestBed.configureTestingModule
      ({
         declarations: [ EinmaleinsComponent ],
         imports: [ FormsModule],
         schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      }).compileComponents();

      fixture = TestBed.createComponent(EinmaleinsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      wurzelelement = fixture.debugElement.nativeElement;
   });

// =====================================================================================================================
// =====================================================================================================================

   it('startet', () =>
   {
      expect(component).toBeDefined();
   });

 // ====================================================================================================================
 // ====================================================================================================================

   it('unmittelbar nach dem Start der Komponente', () =>
   {
      // Die korrekte Meldung wird angezeigt.
      expect(wurzelelement.querySelector('#einmaleins_meldung').textContent).toMatch('Löse bitte die folgende Aufgabe:');

      // Die Zähler stehen auf 0.
      expect(wurzelelement.querySelector('span#einmaleins_zaehlerKorrekt').textContent).toBe('0');
      expect(wurzelelement.querySelector('span#einmaleins_zaehlerFehlerhaft').textContent).toBe('0');

      // Die angezeigten Faktoren entsprechen den Werten der zugehörigen Attribute
      expect(wurzelelement.querySelector('span#einmaleins_faktor1').textContent).toMatch(component.faktor1.toString());
      expect(wurzelelement.querySelector('span#einmaleins_faktor2').textContent).toMatch(component.faktor2.toString());

      // Das Eingabefeld hat den Fokus.
      expect(wurzelelement.querySelector('input#einmaleins_eingegebenesErgebnis')).toBe(document.activeElement);

      // Der "Neu starten"-Knopf ist nicht sichtbar.
      expect(wurzelelement.querySelector('#einmaleins_neustarten')).toBeUndefined;

      // Das Eingabefeld ist leer.
      expect(wurzelelement.querySelector('input#einmaleins_eingegebenesErgebnis').getAttribute('ng-reflect-model')).toBeUndefined;
   });
});
