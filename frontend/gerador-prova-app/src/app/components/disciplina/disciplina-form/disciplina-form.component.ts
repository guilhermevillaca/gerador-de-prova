import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../BaseComponent.generic';
import { Disciplina } from '../../../model/disciplina.model';
import { DisciplinaService } from '../../../service/disciplina.service';

@Component({
  selector: 'app-disciplina-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent extends BaseComponent<Disciplina>{

  protected override entityRoute: string = '/disciplina';
  form: FormGroup;

  constructor(service: DisciplinaService, router: Router){
    super(service, router);
    
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      codigo: new FormControl(''),
      descricao: new FormControl('')
    });
}

  onSubmit() {
    console.log(this.form.value);
  }
}
