import { EinmaleinsComponent } from './einmaleins.component';
import { ZufallszahlService} from '../zufallszahl.service';

describe('EinmaleinsComponent::', () =>
{
   let component : EinmaleinsComponent;
   let service : ZufallszahlServiceMock;

// =====================================================================================================================
// =====================================================================================================================

   beforeEach(() =>
   {
      // Der ZufallszahlService und die EinmaleinsComponent werden erzeugt.
      service = new ZufallszahlServiceMock();
      component = new EinmaleinsComponent(service);
   });

// =====================================================================================================================
// =====================================================================================================================

   it('ngOnInit()', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'starten');

      // Die zu testende Methode wird aufgerufen.
      component.ngOnInit();

      // Die starten()-Methode sollte das Audio-Objekt initialisiert haben.
      expect(component.audio.src).not.toBeUndefined();

      // Die ngOnInit()-Methode sollte die starten()-Methode aufgerufen haben.
      expect(component.starten).toHaveBeenCalled();
   });

// =====================================================================================================================
// =====================================================================================================================

   it('starten()', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');

      // Die Attribute, die von der zu testenden Methode verändert werden, werden initialisiert.
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

      // Die Attribute, die von der zu testenden Methode verändert werden, werden initialisiert.
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

      // Die Attribute, die von der zu testenden Methode verändert werden, werden initialisiert.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;

      // Die vorgegebene Testbedingung (falsch eingegebenes Ergebnis) wird hergestellt.
      component.eingegebenesErgebnis = 12;
      component.korrektesErgebnis = 14;

      // Die zu testende Methode wird ausgeführt.
      component.kontrollieren();

      // Unter der vorgegebenen Testbedingung sollte die kontrollieren()-Methode den Zähler für die falschen Ergebnisse
      // erhöhen, die korrekte Meldung setzen, den Fokus auf das Eingabefeld setzen und den Fehlerton spielen.
      expect(component.ergebnisKorrekt).toBeFalsy();
      expect(component.eingegebenesErgebnis).toBeNull();
      expect(component.meldung).toMatch("Dein Ergebnis ist leider falsch! Bitte versuche es noch einmal.");
      expect(component.zaehlerKorrekt).toBe(5);
      expect(component.zaehlerFehlerhaft).toBe(2);
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).not.toHaveBeenCalled();
      expect(component.fehlertonSpielen).toHaveBeenCalled();
   });

// =====================================================================================================================
// =====================================================================================================================

   it('kontrollieren(), falls das eingegebene Ergebnis korrekt ist', () =>
   {
      // Die von der Methode aufgerufenen Methoden werden durch einen Spy ersetzt.
      spyOn(component, 'fokusAufEingabefeldSetzen');
      spyOn(component, 'neueAufgabeErstellen');
      spyOn(component, 'fehlertonSpielen');

      // Die Attribute, die von der zu testenden Methode verändert werden, werden initialisiert.
      component.zaehlerKorrekt = 5;
      component.zaehlerFehlerhaft = 1;

      // Die vorgegebene Testbedingung (korrekt eingegebenes Ergebnis) wird hergestellt.
      component.eingegebenesErgebnis = 12;
      component.korrektesErgebnis = 12;

      // Die zu testende Methode wird ausgeführt.
      component.kontrollieren();

      // Unter der vorgegebenen Testbedingung sollte die kontrollieren()-Methode den Zähler für die korrekten Ergebnisse
      // erhöhen, die korrekte Meldung setzen, den Fokus auf das Eingabefeld setzen und eine neue Aufgabe erstellen.
      expect(component.ergebnisKorrekt).toBeTruthy();
      expect(component.eingegebenesErgebnis).toBeNull();
      expect(component.meldung).toMatch("Dein Ergebnis ist richtig! Löse bitte noch folgende Aufgabe:");
      expect(component.zaehlerKorrekt).toBe(6);
      expect(component.zaehlerFehlerhaft).toBe(1);
      expect(component.fokusAufEingabefeldSetzen).toHaveBeenCalled();
      expect(component.neueAufgabeErstellen).toHaveBeenCalled();
      expect(component.fehlertonSpielen).not.toHaveBeenCalled();
   });

// =====================================================================================================================
// =====================================================================================================================

   it('neueAufgabeErstellen()', () =>
   {
      // Die Attribute, die von der zu testenden Methode verändert werden, werden initialisiert.
      component.faktor1 = undefined;
      component.faktor2 = undefined;
      component.korrektesErgebnis = undefined;

      // Die zu testende Methode wird aufgerufen.
      component.neueAufgabeErstellen();

      // Die geänderten Attribute werden geprüft.
      expect(component.faktor1).toBe(5);
      expect(component.faktor2).toBe(7);
      expect(component.korrektesErgebnis).toBe(35);
   });
});

// =====================================================================================================================
// =====================================================================================================================

/*
 * Dieser Mock für den ZufallszahlService gibt immer abwechselnd eine 5 und eine 7 zurück.
 */
class ZufallszahlServiceMock
{
   ersterFaktor : boolean = true;

   getZufallszahl(): number
   {
      let zufallszahl = this.ersterFaktor ? 5 : 7;
      this.ersterFaktor = !this.ersterFaktor;

      return zufallszahl;
   }
}
