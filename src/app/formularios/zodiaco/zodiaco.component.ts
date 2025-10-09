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
  signo: string = '';
  imagenSigno: string = '';

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

    const nombre = this.formulario.get('nombre')?.value;
    const apaterno = this.formulario.get('apaterno')?.value;
    const amaterno = this.formulario.get('amaterno')?.value;
    const dia = Number(this.formulario.get('dia')?.value);
    const mes = Number(this.formulario.get('mes')?.value);
    const anio = Number(this.formulario.get('anio')?.value);

    this.nombreCompleto = `${nombre} ${apaterno} ${amaterno}`;

    const fechaActual = new Date();
    this.edad = fechaActual.getFullYear() - anio;

    const zodiaco = new Zodiaco(); 
    const resultado = zodiaco.signo(anio); 

    this.signo = resultado.nombre;
    this.imagenSigno = resultado.imagen;
  }
}
