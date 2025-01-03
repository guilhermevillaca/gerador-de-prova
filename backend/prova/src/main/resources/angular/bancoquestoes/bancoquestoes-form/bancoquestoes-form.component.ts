import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bancoquestoes-form',
  templateUrl: './bancoquestoes-form.component.html',
  styleUrls: ['./bancoquestoes-form.component.css']
})
export class BancoQuestoesFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    disciplina: new FormControl(''),
    questoes: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
