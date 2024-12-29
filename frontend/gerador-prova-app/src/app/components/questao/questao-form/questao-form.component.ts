import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questao-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './questao-form.component.html',
  styleUrls: ['./questao-form.component.css']
})
export class QuestaoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    tipo: new FormControl(''),
    enunciado: new FormControl(''),
    numeroDeLinhas: new FormControl(''),
    prova: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
