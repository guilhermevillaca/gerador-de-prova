import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-turma-form',
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
