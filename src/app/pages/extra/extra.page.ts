import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButtons, IonButton, IonApp, IonMenu, IonList, IonItem, IonMenuButton, IonMenuToggle]
})
export class ExtraPage implements OnInit {
  constructor(private router: Router,  private menu: MenuController) { }

  ngOnInit() {
    console.log('Componente ExtraPage inicializado.');
  }

  onBackClick() {

    this.router.navigate(['/home']);
  }
  onCloseMenuClick(){
    this.menu.close();
  }
  // onHelpClick() {
  //   console.log('Here');
  //   this.menu.open('helpM');
  // }

  // closeMenu(){
  //   this.menu.close();
  // }
}
