import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { ZodiacoComponent } from "./formularios/zodiaco/zodiaco.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
