import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estado',
  imports: [
    NgFor
  ],
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  items: any[] = []; // Exemplo de dados
}