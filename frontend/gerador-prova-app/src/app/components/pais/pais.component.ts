import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pais',
  imports: [
    NgFor
  ],
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
  items: any[] = []; // Exemplo de dados
}
