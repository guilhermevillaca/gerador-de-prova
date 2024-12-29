import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  imports: [
    NgFor
  ],
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent {
  items: any[] = []; // Exemplo de dados
}
