import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Alternativa } from '../../model/alternativa.model';
import { AlternativaService } from '../../service/alternativa.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../BaseComponent.generic';

@Component({
  selector: 'app-alternativa',
  imports: [
    NgFor
  ],
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.css']
})
export class AlternativaComponent extends BaseComponent<Alternativa>{

  entityRoute = '/alternativa';

  constructor(service: AlternativaService, router: Router){
    super(service, router)
  }   
}
