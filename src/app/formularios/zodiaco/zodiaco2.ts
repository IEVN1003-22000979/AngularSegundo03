export class Zodiaco {
  anio: number = 0;
  nombre: string = ''; 
  apaterno: string = '' 
  amaterno: string = ''
  dia: number = 0
  mes:  number = 0
  nombreCompleto: string = ''
  imagenSigno: string = ""
  signoName: string = ""
  edad: number= 0

  signos = [
    { nombre: 'Rata', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg' },
    { nombre: 'Buey', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg' },
    { nombre: 'Tigre', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg' },
    { nombre: 'Conejo', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg' },
    { nombre: 'Dragón', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg' },
    { nombre: 'Serpiente', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg' },
    { nombre: 'Caballo', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg' },
    { nombre: 'Cabra', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg' },
    { nombre: 'Mono', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg' },
    { nombre: 'Gallo', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg' },
    { nombre: 'Perro', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg' },
    { nombre: 'Cerdo', imagen: 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg' }
  ];

  signo(): void {
    const index = (this.anio - 4) % 12;

    this.signoName = this.signos[index].nombre
    this.imagenSigno = this.signos[index].imagen
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;

    const fechaActual = new Date();

    if((this.mes < (fechaActual.getMonth() + 1)) || (this.mes == (fechaActual.getMonth() + 1) && (this.dia < fechaActual.getDate()))){

      this.edad = fechaActual.getFullYear() - this.anio;

    } else {
      this.edad = fechaActual.getFullYear() - this.anio -1;
    }

  }
}
