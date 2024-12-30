import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CidadeService } from '../../service/cidade.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from '../BaseComponent.generic';
import { Cidade } from '../../model/cidade.model';

@Component({
  selector: 'app-cidade',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent extends BaseComponent<Cidade>{

  entityRoute = '/cidade';

  constructor(service: CidadeService, router: Router){
    super(service, router)
  }   
  
}
