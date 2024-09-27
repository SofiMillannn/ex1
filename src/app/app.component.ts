import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import {bulb, checkmark, checkmarkDone, grid, heart, logoAppleAppstore} from 'ionicons/icons';
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {
  IonBackButton,
  IonButton, IonButtons, IonCard,
  IonCardContent, IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid, IonicModule, IonIcon, IonImg,
  IonRow, MenuController
} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, HeaderComponent, IonicModule]


})
export class AppComponent {

  constructor(private menu: MenuController) {
    addIcons({grid, heart, bulb,checkmarkDone});
  }
  closeMenu() {
    this.menu.close();
  }

  selectOption(option: string) {
    console.log(`${option} seleccionada`);
    this.menu.close();
  }
}
