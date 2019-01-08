import { Injectable } from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class ZufallszahlService
{
  constructor() { }

  /**
   * Erzeugt eine ganzzahlige Zufallszahl zwischen 0 und10
   */
  getZufallszahl(): number
  {
  return Math.floor(Math.random() * 11);
  }
}
