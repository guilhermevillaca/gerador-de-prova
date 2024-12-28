import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pais-form',
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
