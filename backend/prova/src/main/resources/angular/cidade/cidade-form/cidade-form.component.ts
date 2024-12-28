import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    estado: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
