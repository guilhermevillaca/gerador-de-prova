import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../BaseComponent.generic';
import { Questao } from '../../../model/questao.model';
import { QuestaoService } from '../../../service/questao.service';

@Component({
  selector: 'app-questao-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule,
    NgIf
  ],
  templateUrl: './questao-form.component.html',
  styleUrls: ['./questao-form.component.css']
})
export class QuestaoFormComponent extends BaseComponent<Questao>{


  protected override entityRoute: string = '/questao';
  id_prova: number;
  form: FormGroup;

  constructor(service: QuestaoService, router: Router){
    super(service, router);
    
    this.id_prova = this.activatedRoute.snapshot.params['id_prova'] ?? null; // Define como `null` se não houver `id`
    this.id = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`

    if (this.id) {
      // Carrega os dados do item e atualiza o formulário
      this.loadItemById(this.id).then(() => this.updateForm());
    }

    this.form = new FormGroup({
      id: new FormControl(''),
      tipo: new FormControl(''),
      enunciado: new FormControl(''),
      numeroDeLinhas: new FormControl(''),
      prova: new FormControl(this.id_prova)
    });

    this.entityRoute = this.entityRoute + '/' + this.id_prova;
  }

  private updateForm(): void {
    if (this.item) {
      this.form.patchValue({
        id: this.item.id,
        tipo: this.item.tipo,
        enunciado: this.item.enunciado,
        numeroDeLinhas: this.item.numeroDeLinhas,
        prova: this.id_prova        
      });
    }
  }

  salvar() {
    let data = this.form.value;
    let questao = Questao.create(this.id, data.tipo, data.enunciado, data.numeroDeLinhas, this.id_prova);
    this.save(questao);
  }
}
