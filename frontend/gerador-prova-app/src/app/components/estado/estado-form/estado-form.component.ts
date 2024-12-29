import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estado-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    uf: new FormControl(''),
    pais: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
