import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    codigo: new FormControl(''),
    descricao: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
