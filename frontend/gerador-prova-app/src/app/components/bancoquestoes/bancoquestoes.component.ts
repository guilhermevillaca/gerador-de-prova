import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { BancoQuestoes } from '../../model/bancoquestoes.model';
import { BancoQuestoesService } from '../../service/banco-questoes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bancoquestoes',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './bancoquestoes.component.html',
  styleUrls: ['./bancoquestoes.component.css']
})
export class BancoQuestoesComponent extends BaseComponent<BancoQuestoes>{
  protected override entityRoute: string = 'banco-questoes';
  constructor(service: BancoQuestoesService, router: Router){
    super(service, router);
  }
}
