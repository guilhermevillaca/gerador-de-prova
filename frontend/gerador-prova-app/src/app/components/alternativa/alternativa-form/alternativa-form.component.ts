import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alternativa-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './alternativa-form.component.html',
  styleUrls: ['./alternativa-form.component.css']
})
export class AlternativaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    formato: new FormControl(''),
    descricao: new FormControl(''),
    questao: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
