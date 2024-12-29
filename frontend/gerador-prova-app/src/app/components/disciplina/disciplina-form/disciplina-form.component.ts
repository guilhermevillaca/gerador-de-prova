import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-disciplina-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    codigo: new FormControl(''),
    descricao: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
