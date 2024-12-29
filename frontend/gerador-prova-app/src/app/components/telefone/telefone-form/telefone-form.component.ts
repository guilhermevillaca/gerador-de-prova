import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-telefone-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './telefone-form.component.html',
  styleUrls: ['./telefone-form.component.css']
})
export class TelefoneFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    ddd: new FormControl(''),
    numero: new FormControl(''),
    principal: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
