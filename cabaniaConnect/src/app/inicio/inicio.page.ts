import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,//controlar alerts
    private navCtrl: NavController,
    private router: Router//controlar los links
    
  ) {}

  ngOnInit(): void {

    
  }
  
  doLogOut() {
    this.router.navigate(['/login'])
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Está seguro de querer cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Cerrar sesión');
            localStorage.removeItem('user');
            this.navCtrl.navigateForward('/login'); 
          },
        },
      ],
    });
    await alert.present();
  }
  
}
