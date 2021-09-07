// Nous importons Output et EventEmitter :
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-enfant',
  
  template: `
    <button (click)="decrementer()" > - </button>
    <button (click)="incrementer()"> + </button>
  `
})

export class EnfantComponent implements OnInit {
  
  // Initialisation du compteur à 0 :
  valeurCompteur: number = 0;
  @Output("changement") changementCompteur = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  incrementer() {
    this.valeurCompteur++;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    });
  }
  
  decrementer() {
    this.valeurCompteur--;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    });
  }

}
