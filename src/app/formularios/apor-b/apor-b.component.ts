import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mult } from './axb';  // Asegúrate de importar correctamente tu clase Mult

@Component({
  selector: 'app-apor-b',
  templateUrl: './apor-b.component.html',
  styleUrls: ['./apor-b.component.css'],
  imports: [FormsModule, ReactiveFormsModule]  // Aquí deberías importar FormsModule y ReactiveFormsModule en el módulo si no lo tienes
})
export class AporBComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0;
  datos = new Mult();
   ngOnInit() {
    this.formulario = new FormGroup({
      a: new FormControl(0),
      b: new FormControl(0),
    });
  }

  calcular() {
    this.datos.a =this.formulario.value.a
    this.datos.b =this.formulario.value.b

    this.datos.calcular()
    this.resultado = this.datos.resultado
  }
}
