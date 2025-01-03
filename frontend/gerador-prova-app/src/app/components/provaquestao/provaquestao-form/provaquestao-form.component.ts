import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-provaquestao-form',
  templateUrl: './provaquestao-form.component.html',
  styleUrls: ['./provaquestao-form.component.css']
})
export class ProvaQuestaoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    prova: new FormControl(''),
    questao: new FormControl(''),
    peso: new FormControl(''),
    ordem: new FormControl('')
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
