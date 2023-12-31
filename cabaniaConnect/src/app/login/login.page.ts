import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from'@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string = "";
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController:AlertController,
    public navCtrl:NavController,private router: Router) { 
    
    this.formularioLogin = this.fb.group({
      'username':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
      
    })

  }

  ngOnInit() {
  }

 
  async ingresar() {

    localStorage.setItem('userName' , this.userName);
    

    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.userName == f.userName && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }  
}
