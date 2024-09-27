// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) {}


  goToNuevaPagina() {
    console.log('Navegando a la nueva página');
    this.router.navigate(['/extra']);
  }
}
