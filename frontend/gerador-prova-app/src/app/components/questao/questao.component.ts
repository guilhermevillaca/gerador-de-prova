import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { Questao } from '../../model/questao.model';
import { QuestaoService } from '../../service/questao.service';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-questao',
  imports: [
    NgFor,
    NgIf,
    RouterModule
  ],
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent extends BaseComponent<Questao>{

  protected override entityRoute: string = '/questao';
  id_prova: number;
  constructor(protected override service: QuestaoService, router: Router){
    super(service, router);
    this.id_prova = this.activatedRoute.snapshot.params['id_prova'] ?? null; // Define como `null` se não houver `id`
    if(this.id_prova){
      this.findByProva(this.id_prova);
    }
  }

  public async findByProva(id_prova: number){
    this.items$ = await lastValueFrom(this.service.findByProva(id_prova));      
  }

  override edit(id: any): void {
      this.router.navigate([`questao/${this.id_prova}/editar/${id}`]);
  } 
  
}
