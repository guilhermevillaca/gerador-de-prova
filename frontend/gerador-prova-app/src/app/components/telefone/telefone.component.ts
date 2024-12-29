import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-telefone',
  imports: [
    NgFor
  ],
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent {
  items: any[] = []; // Exemplo de dados
}
