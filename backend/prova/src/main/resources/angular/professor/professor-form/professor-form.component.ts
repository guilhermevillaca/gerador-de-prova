import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    grau: new FormControl(''),
    pessoa: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
