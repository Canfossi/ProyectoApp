import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,//controlar alerts
    private navCtrl: NavController,//controlar los links
    
  ) {}

  ngOnInit(): void {

    
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
            localStorage.removeItem('user'); // Verifica que esto esté funcionando
            this.navCtrl.navigateForward('/login'); // Redirecciona a la página de inicio de sesión
          },
        },
      ],
    });
    await alert.present();
  }
  
}
