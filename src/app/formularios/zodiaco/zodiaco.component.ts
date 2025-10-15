import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './zodiaco2';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;

  nombreCompleto: string = '';
  edad: number = 0;
  signoName: string = '';
  imagenSigno: string = '';
  datos = new Zodiaco();

  ngOnInit(): void {
      this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcular(): void {
    if (this.formulario.invalid) {
      alert('llena todos los campos.');
      return;
    }

   




    this.datos.nombre = this.formulario.get('nombre')?.value;
    this.datos.apaterno = this.formulario.get('apaterno')?.value;
    this.datos.amaterno = this.formulario.get('amaterno')?.value;
    this.datos.dia = Number(this.formulario.get('dia')?.value);
    this.datos.mes = Number(this.formulario.get('mes')?.value);
    this.datos.anio= this.formulario.value.anio


    this.datos.signo();    
    this.signoName = this.datos.signoName;
    this.imagenSigno = this.datos.imagenSigno;
    console.log(this.imagenSigno)

    this.nombreCompleto = this.datos.nombreCompleto
    this.edad = this.datos.edad;
  }
}
