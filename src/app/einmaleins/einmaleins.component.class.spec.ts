import { EinmaleinsComponent } from './einmaleins.component';
import { ZufallszahlService} from '../zufallszahl.service';

describe('EinmaleinsComponent::', () =>
{
   it('starten()', () =>
   {
      // Der ZufallszahlService und die EinmaleinsComponent werden erzeugt.
      const service = new ZufallszahlService();
      const component = new EinmaleinsComponent(service);

      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');

      // Die Attribute der Komponente werden initialisiert.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;
      component.ergebnisKorrekt = false;
      component.meldung = null;
      component.eingegebenesErgebnis = 14;

      // Die zu testende Methode wird ausgeführt.
      component.starten();

      // Die Attribute der Komponente werden geprüft.
      expect(component.zaehlerKorrekt).toBe(0);
      expect(component.zaehlerFehlerhaft).toBe(0);
      expect(component.ergebnisKorrekt).toBeTruthy;
      expect(component.meldung).toMatch("Löse bitte die folgende Aufgabe:");
      expect(component.eingegebenesErgebnis).toBeNull();

      // Es wird geprüft, ob die Spies aufgerufen worden sind.
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).toHaveBeenCalled();
   });
});
