import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    bairro: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    cidade: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
