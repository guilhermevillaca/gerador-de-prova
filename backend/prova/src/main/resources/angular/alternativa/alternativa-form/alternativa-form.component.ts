import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alternativa-form',
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
