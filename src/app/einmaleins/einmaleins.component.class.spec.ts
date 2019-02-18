import { EinmaleinsComponent } from './einmaleins.component';
import { ZufallszahlService} from '../zufallszahl.service';

describe('EinmaleinsComponent::', () =>
{
   let component : EinmaleinsComponent;
   let service : ZufallszahlService;

// =====================================================================================================================
// =====================================================================================================================

   beforeEach(() =>
   {
      // Der ZufallszahlService und die EinmaleinsComponent werden erzeugt.
      service = new ZufallszahlService();
      component = new EinmaleinsComponent(service);
   });

// =====================================================================================================================
// =====================================================================================================================

   it('starten()', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');

      // Die Attribute der Komponente werden mit Werten initialisiert, die nicht den Werten nach Aufruf der Methode
      // starten() entsprechen.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;
      component.ergebnisKorrekt = false;
      component.meldung = null;
      component.eingegebenesErgebnis = 14;

      // Die zu testende Methode wird ausgeführt.
      component.starten();

      // Die starten()-Methode sollte mehrere Attribute wieder auf ihre Werte bei Start eines neues Spiels setzen.
      expect(component.zaehlerKorrekt).toBe(0);
      expect(component.zaehlerFehlerhaft).toBe(0);
      expect(component.ergebnisKorrekt).toBeTruthy;
      expect(component.meldung).toMatch("Löse bitte die folgende Aufgabe:");
      expect(component.eingegebenesErgebnis).toBeNull();

      // Die starten()-Methode sollte den Fokus wieder auf das Eingangsfeld setzen und eine neue Aufgabe auswürfeln.
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).toHaveBeenCalled();
   });

// =====================================================================================================================
// =====================================================================================================================

   it('kontrollieren(), falls eingegebenesErgebnis == null', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');
      spyOn(component, 'fehlertonSpielen');

      // Die Attribute der Komponente werden initialisiert.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;

      // Die vorgegebene Testbedingung (eingegebenesErgebnis == null) wird hergestellt
      component.eingegebenesErgebnis == null;

      // Die zu testende Methode wird ausgeführt.
      component.kontrollieren();

      // Unter der vorgegebenen Testbedingung sollte die kontrollieren()-Methode ausschließlich den Fokus wieder auf
      // das Eingabefeld setzen. Insbesondere sollten sich also die Werte für die korrekten und fehlerhaften Antworten
      // nicht verändern.
      expect(component.zaehlerKorrekt).toBe(5);
      expect(component.zaehlerFehlerhaft).toBe(1);
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).not.toHaveBeenCalled();
      expect(component.fehlertonSpielen).not.toHaveBeenCalled();
   });

// =====================================================================================================================
// =====================================================================================================================

   it('kontrollieren(), falls das eingegebene Ergebnis falsch ist', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');
      spyOn(component, 'fehlertonSpielen');

      // Die Attribute der Komponente werden initialisiert.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;

      // Die vorgegebene Testbedingung (falsch eingegebenes Ergebnis) wird hergestellt.
      component.eingegebenesErgebnis = 12;
      component.korrektesErgebnis = 14;

      // Die zu testende Methode wird ausgeführt.
      component.kontrollieren();

      // Unter der vorgegebenen Testbedingung sollte die kontrollieren()-Methode den Zähler für die falschen Ergebnisse
      // erhöhen, die korrekte Meldung setzen, den Fokus auf das Eingabefeld setzen und den Fehlerton spielen.
      expect(component.ergebnisKorrekt).toBeTruthy;
      expect(component.meldung).toMatch("Dein Ergebnis ist leider falsch! Bitte versuche es noch einmal.");
      expect(component.zaehlerKorrekt).toBe(5);
      expect(component.zaehlerFehlerhaft).toBe(2);
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).not.toHaveBeenCalled();
      expect(component.fehlertonSpielen).toHaveBeenCalled();
   });
});
