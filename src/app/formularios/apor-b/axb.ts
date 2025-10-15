export class Mult {
  a: number = 0;
  b: number = 0;
  resultado: number=0;

  calcular(){
 
    let resultado = 0;
    for (let i = 0; i < this.b; i++) {
      resultado += this.a;
    }
 
    this.resultado = resultado
  }
}