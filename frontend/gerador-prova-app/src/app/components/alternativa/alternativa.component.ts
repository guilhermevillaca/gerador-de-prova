import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alternativa',
  imports: [
    NgFor
  ],
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.css']
})
export class AlternativaComponent {
  items: any[] = []; // Exemplo de dados
}
