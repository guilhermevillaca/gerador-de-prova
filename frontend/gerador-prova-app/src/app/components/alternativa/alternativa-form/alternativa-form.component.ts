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
  id_questao: number;

  constructor(service: AlternativaService, router: Router){
    super(service, router);
    this.id_questao = this.activatedRoute.snapshot.params['id_questao'] ?? null; // Define como `null` se não houver `id`
    this.form = new FormGroup({
      id: new FormControl(''),
      formato: new FormControl(''),
      descricao: new FormControl(''),
      questao: new FormControl(this.id_questao)
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
    const data = this.form.value;
    let alternativa = Alternativa.create(this.id, data.formato, data.descricao, this.id_questao);
    //this.save(alternativa);
    this.service.salvar(alternativa).subscribe(
      (alternativa: any) => {
        this.router.navigate([`alternativa/${this.id_questao}`]);
      },
      (error: any) => {
        console.error(error);
      }
    );
    
  
  }
}
