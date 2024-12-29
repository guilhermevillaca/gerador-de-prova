import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-turma',
  imports: [
    NgFor
  ],
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent {
  items: any[] = []; // Exemplo de dados
}
