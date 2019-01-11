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

  constructor(private zufallszahlService: ZufallszahlService)
  {
    this.meldung = "Löse bitte die folgende Aufgabe:"

    // Dies bewirkt, dass die Meldung in der normalen Textfarbe angezeigt wird.
    this.ergebnisKorrekt = true;
  }

  ngOnInit()
  {
    this.meldung = "Löse bitte die folgende Aufgabe:"
    this.neueAufgabeErstellen();
  }

  /**
   * Kontrolliert das Ergebnis, erzeugt eine Meldung und ggf. eine  neue Aufgabe.
   */
  kontrollieren()
    {
    this.ergebnisKorrekt = (this.eingegebenesErgebnis == this.korrektesErgebnis);

    this.eingegebenesErgebnis = null;

    if (this.ergebnisKorrekt)
    {
      this.meldung = "Dein Ergebnis ist richtig! Löse bitte noch folgende Aufgabe:"
      this.neueAufgabeErstellen();
    }
    else
    {
      this.meldung = "Dein Ergebnis ist leider falsch! Bitte versuche es noch einmal."
    }
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
