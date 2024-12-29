import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pessoa-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
