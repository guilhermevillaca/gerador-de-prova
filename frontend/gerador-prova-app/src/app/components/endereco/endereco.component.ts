import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-endereco',
  imports: [
    NgFor
  ],
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent {
  items: any[] = []; // Exemplo de dados
}
