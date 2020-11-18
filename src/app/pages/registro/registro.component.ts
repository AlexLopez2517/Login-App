import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;


  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
  }

  onSumbit( form: NgForm ){

    if ( form.invalid ) { return; }

    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(form);
  }

}
