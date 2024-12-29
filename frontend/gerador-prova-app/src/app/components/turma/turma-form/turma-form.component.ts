import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-turma-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    turno: new FormControl(''),
    periodoLetivo: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
