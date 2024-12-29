import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questao',
  imports: [
    NgFor
  ],
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent {
  items: any[] = []; // Exemplo de dados
}
