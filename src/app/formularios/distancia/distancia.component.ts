import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from '../distancias2';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
  formulario!: FormGroup; 
  resultado!: number; 

  ngOnInit(): void { 

  this.formulario = new FormGroup({ 
    x1: new FormControl(''), 
    y1: new FormControl(''), 
    x2: new FormControl(''), 
    y2: new FormControl('') 
  }); 
} 

d = new Distancia();

calcular(): void { 
  this.d.x1 = Number(this.formulario.get('x1')?.value); 
  this.d.y1 = Number(this.formulario.get('y1')?.value); 
  this.d.x2 = Number(this.formulario.get('x2')?.value); 
  this.d.y2 = Number(this.formulario.get('y2')?.value); 

  this.d.calcular()

  this.resultado = this.d.resultado; 

} 

} 
  
  





/*formulario!:FormGroup;
  resultado!:number;
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
    numero1: new FormControl(''),
    numero2: new FormControl('')
    })
  }
  multNumeros():void{
    const numero1 = this.formulario.get('numero1')?.value;
    const numero2 = this.formulario.get('numero2')?.value;
    this.resultado = numero1*numero2;
  }*/