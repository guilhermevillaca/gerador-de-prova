import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-prova-form',
  templateUrl: './prova-form.component.html',
  styleUrls: ['./prova-form.component.css']
})
export class ProvaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    data: new FormControl(''),
    professor: new FormControl(''),
    disciplina: new FormControl(''),
    turno: new FormControl(''),
    periodoLetivo: new FormControl(''),
    observacoes: new FormControl(''),
    formato: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
