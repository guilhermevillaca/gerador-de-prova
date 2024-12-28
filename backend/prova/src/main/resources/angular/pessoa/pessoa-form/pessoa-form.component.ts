import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataNascimento: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
