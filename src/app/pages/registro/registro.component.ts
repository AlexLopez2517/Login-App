import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;


  constructor(private auth: AuthService) { }

  ngOnInit() { 
   this.usuario = new UsuarioModel();
  }

  onSumbit( form: NgForm ){

    if ( form.invalid ) { return; }

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp =>{

      console.log(resp);

    }, (err)=>{
      console.log(err.error.error.message);
    } );
  }

}
