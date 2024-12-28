import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.css']
})
export class EstadoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    uf: new FormControl(''),
    pais: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
