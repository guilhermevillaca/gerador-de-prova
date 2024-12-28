import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-telefone-form',
  templateUrl: './telefone-form.component.html',
  styleUrls: ['./telefone-form.component.css']
})
export class TelefoneFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    ddd: new FormControl(''),
    numero: new FormControl(''),
    principal: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
