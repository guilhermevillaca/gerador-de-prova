import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    login: new FormControl(''),
    senha: new FormControl(''),
    ativo: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
