export class mult {
  resultado: number = 0;

  multiplicar(a: number, b: number): void {
    this.resultado = 0;
    for (let i = 0; i < b; i++) {
      this.resultado += a;
    }
  }
}
