import { Component, OnInit } from '@angular/core';
import { ZufallszahlService} from '../zufallszahl.service';

@Component({
  selector: 'einmaleins',
  templateUrl: './einmaleins.component.html',
  styleUrls: ['./einmaleins.component.scss']
})
export class EinmaleinsComponent implements OnInit
{
   ergebnisKorrekt : boolean;

   meldung : string;

   faktor1 : number
   faktor2 : number;
   korrektesErgebnis : number;
   eingegebenesErgebnis : number;

   zaehlerKorrekt : number;
   zaehlerFehlerhaft : number;

   constructor(private zufallszahlService: ZufallszahlService) {}

   ngOnInit()
   {
      // Ein neues Spiel wird begonnen.
      this.starten();
   }

   /**
    * Kontrolliert das Ergebnis, erzeugt eine Meldung und ggf. eine  neue Aufgabe.
    */
   kontrollieren()
      {
      this.ergebnisKorrekt = (this.eingegebenesErgebnis == this.korrektesErgebnis);

      this.eingegebenesErgebnis = null;

      // Falls das eingegebene Ergebnis korrekt ist, ...
      if (this.ergebnisKorrekt)
      {
         this.meldung = "Dein Ergebnis ist richtig! Löse bitte noch folgende Aufgabe:"
         this.zaehlerKorrekt++;
         this.neueAufgabeErstellen();
      }

      // Falls das eingegebene Ergebnis fehlerhaft ist, ...
      else
      {
         this.meldung = "Dein Ergebnis ist leider falsch! Bitte versuche es noch einmal."
         this.zaehlerFehlerhaft++;
      }
   }

   /**
    * Startet ein neues Spiel, d.h. die Zähler werden zurückgesetzt.
    */
   starten()
   {
      // Die Zähler werden initial auf 0 gestellt.
      this.zaehlerKorrekt = 0;
      this.zaehlerFehlerhaft = 0;

      // Dies bewirkt, dass die Meldung in der normalen Textfarbe angezeigt wird.
      this.ergebnisKorrekt = true;

      // Die initiale Melung wird angezeigt.
      this.meldung = "Löse bitte die folgende Aufgabe:"

      // Die erste Aufgabe wird bestimmt.
      this.neueAufgabeErstellen();
   }

   /**
    * Erstellt eine neue Aufgabe.
    */
   neueAufgabeErstellen()
   {
      this.faktor1 = this.zufallszahlService.getZufallszahl();
      this.faktor2 = this.zufallszahlService.getZufallszahl();
      this.korrektesErgebnis = this.faktor1 * this.faktor2;
   }
}
