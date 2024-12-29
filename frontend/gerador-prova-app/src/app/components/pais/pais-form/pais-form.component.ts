import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pais-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    sigla: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
