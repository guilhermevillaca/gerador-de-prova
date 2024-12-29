import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  imports: [
    NgFor
  ],
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  items: any[] = []; // Exemplo de dados
}
