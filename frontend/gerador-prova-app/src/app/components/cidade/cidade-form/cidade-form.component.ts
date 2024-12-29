import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CidadeService } from '../../../service/cidade.service';
import { EstadoService } from '../../../service/estado.service';
import { lastValueFrom, take } from 'rxjs';
import { Estado } from '../../../model/estado.model';
import { Cidade } from '../../../model/cidade.model';
import { BaseComponent } from '../../BaseComponent.generic';

@Component({
  selector: 'app-cidade-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent extends BaseComponent<Cidade>{

  form: FormGroup;
  estado$: any;
  entityRoute = '/cidade';

  constructor(service: CidadeService, private estadoService: EstadoService, router: Router){
    super(service, router);
    this.getEstados();
    this.id = this.activatedRoute.snapshot.params['id'] ?? null; // Define como `null` se não houver `id`
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      estado: new FormControl('')
    });
    if (this.id) {
      // Carrega os dados do item e atualiza o formulário
      this.loadItemById(this.id).then(() => this.updateForm());
    }
  }

  public async getEstados(){
    this.estado$ = await lastValueFrom(this.estadoService.get());
  }

  private updateForm(): void {
    if (this.item) {
      this.form.patchValue({
        id: this.item.id,
        nome: this.item.nome,
        estado: this.item.estado?.id
      });
    }
  }

  public salvar(){
    const formData = this.form.value;    
    let nome = formData.nome!;
    let id_estado = Number(formData.estado!); 
    let cidade = Cidade.create(this.id, nome, id_estado);    
    this.save(cidade);
  }
}
