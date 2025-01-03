import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questao-form',
  templateUrl: './questao-form.component.html',
  styleUrls: ['./questao-form.component.css']
})
export class QuestaoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    tipo: new FormControl(''),
    enunciado: new FormControl(''),
    numeroDeLinhas: new FormControl(''),
    prova: new FormControl(''),
    alternativas: new FormControl(''),
    bancoQuestoes: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
