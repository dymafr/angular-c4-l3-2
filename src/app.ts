import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnfantComponent } from './enfant.component';

@Component({
  selector: 'my-app',

  // Nous effectuons une liason de donnée sur l'instance du composant enfant :
  template: `
    {{ valeur }}
    <div>
      <app-enfant (changement)="miseAjourCompteur($event)"></app-enfant>
    </div>
  `
})
export class AppComponent implements OnInit {
  // Initialisation à 0 :
  valeur = 0;

  ngOnInit() {}

  // Méthode exécutée à chaque événement reçu :
  miseAjourCompteur(event: { value: number }) {
    this.valeur = event.value;
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, EnfantComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
