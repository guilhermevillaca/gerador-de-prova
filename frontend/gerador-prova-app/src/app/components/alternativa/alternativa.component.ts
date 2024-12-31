import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Alternativa } from '../../model/alternativa.model';
import { AlternativaService } from '../../service/alternativa.service';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../BaseComponent.generic';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-alternativa',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.css']
})
export class AlternativaComponent extends BaseComponent<Alternativa>{

  entityRoute = '/alternativa';
  id_questao: number;
  constructor(protected override service: AlternativaService, router: Router){
    super(service, router);
    this.id_questao = this.activatedRoute.snapshot.params['id_questao'] ?? null; // Define como `null` se não houver `id`
    if(this.id_questao){
      this.findByQuestao(this.id_questao);
    }
  }

  public async findByQuestao(id_prova: number){
      this.items$ = await lastValueFrom(this.service.findByQuestao(this.id_questao));      
    }
  
    override edit(id: any): void {
        this.router.navigate([`alternativa/${this.id_questao}/editar/${id}`]);
    }

}
