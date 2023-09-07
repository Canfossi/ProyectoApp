import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from'@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {
  formularioRegistro:FormGroup;

  constructor(public fb: FormBuilder,
    public alertController:AlertController,
    public navCtrl:NavController) { 

    this.formularioRegistro = this.fb.group({
      'nombres':new FormControl("",Validators.required),
      'apellidoCompleto':new FormControl("",Validators.required),
      'correo':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
      'confirmarPassword':new FormControl("",Validators.required),
      'telefono':new FormControl("",Validators.required)

      
    });
  }

  ngOnInit() {
  }
     async guardar(){
      //AQUI SE VALIDA SI EL FORMULARIO ESTA PARA GUARDAR
      var f= this.formularioRegistro.value;

      //SI EL FORMULARIO ESTA VACIO Y SE APREATA EL BOTON DE REGISTRAR SE MANDA UN MENSAJE QUE TIENE QUE RELLENAR LAS CASILLA PARA CONTINUAR 
      if (this.formularioRegistro.invalid){
         const alert =await this.alertController.create({
          header:'datos incompleto',
          message:'ERROR. por favor rellenar el formaluario',
          buttons:['Aceptar']
         });

         await alert.present();
         return;
      }

      var usuario ={
        nombres: f.nombres,
        apellidoCompleto: f.apellidoCompleto,
        correo: f.correo,
        password: f.password,
        confirmarPassword: f.confirmarPassword,
        telefono: f.telefono
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));
    }
}
