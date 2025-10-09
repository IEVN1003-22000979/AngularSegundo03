import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mult } from './axb';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css',
})
export class AporBComponent implements OnInit {
  formulario!: FormGroup;
  resultado: number = 0;

  ngOnInit() {
    this.formulario = new FormGroup({
      a: new FormControl(null, [Validators.required]),
      b: new FormControl(null, [Validators.required]),
    });
  }

  calcular() {

    const a = this.formulario.get('a')?.value;
    const b = this.formulario.get('b')?.value;

    const multiplicador = new mult();
    multiplicador.multiplicar(a, b);

    this.resultado = multiplicador.resultado;
  }
}
