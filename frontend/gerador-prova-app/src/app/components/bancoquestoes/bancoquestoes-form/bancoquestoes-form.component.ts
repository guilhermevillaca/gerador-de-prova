import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '../../BaseComponent.generic';
import { BancoQuestoes } from '../../../model/bancoquestoes.model';
import { BancoQuestoesService } from '../../../service/banco-questoes.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { DisciplinaService } from '../../../service/disciplina.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-bancoquestoes-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './bancoquestoes-form.component.html',
  styleUrls: ['./bancoquestoes-form.component.css']
})
export class BancoQuestoesFormComponent extends BaseComponent<BancoQuestoes>{

  protected override entityRoute: string = 'banco-questoes';
  disciplina$: any;
  form: FormGroup;

  constructor(service: BancoQuestoesService, router: Router, private disciplinaService: DisciplinaService){
    super(service, router);
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      disciplina: new FormControl('')
    });
    this.getDisciplinas();
  }
    
  salvar() {
    const data = this.form.value;
    let bancoQuestoes = BancoQuestoes.create(data.id, data.nome, data.disciplina.id);
    this.save(bancoQuestoes);
  }

  public async getDisciplinas(){
    this.disciplina$ = await lastValueFrom(this.disciplinaService.get());
  }
}
