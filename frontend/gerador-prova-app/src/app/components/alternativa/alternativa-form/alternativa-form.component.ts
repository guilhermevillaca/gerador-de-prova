import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../../BaseComponent.generic';
import { Alternativa } from '../../../model/alternativa.model';
import { AlternativaService } from '../../../service/alternativa.service';

@Component({
  selector: 'app-alternativa-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './alternativa-form.component.html',
  styleUrls: ['./alternativa-form.component.css']
})
export class AlternativaFormComponent extends BaseComponent<Alternativa>{

  form: FormGroup;
  entityRoute = '/alternativa';

  constructor(service: AlternativaService, router: Router){
    super(service, router);
    
    this.form = new FormGroup({
      id: new FormControl(''),
      formato: new FormControl(''),
      descricao: new FormControl(''),
      questao: new FormControl('')
    });
    this.id = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`
    if (this.id) {
      // Carrega os dados do item e atualiza o formulário
      this.loadItemById(this.id).then(() => this.updateForm());
    }

  }

  private updateForm(): void {
    if (this.item) {
      this.form.patchValue({
        id: this.item.id,
        formato: this.item.formato,
        descricao: this.item.descricao,
        questao: this.item.questao?.id
      });
    }
  }

  public salvar() {
    const formData = this.form.value;
    let formato = formData.formato;
    let descricao = formData.descricao;
    let id_questao = Number(formData.questao!);
    let alternativa = Alternativa.create(this.id, formato, descricao, id_questao);
    this.save(alternativa);
  }
}
