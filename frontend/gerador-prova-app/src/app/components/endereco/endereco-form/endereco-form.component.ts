import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-endereco-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    bairro: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    cidade: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
