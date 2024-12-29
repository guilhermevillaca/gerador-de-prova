import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { Endereco } from '../../model/endereco.model';
import { EnderecoService } from '../../service/endereco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  imports: [
    NgFor
  ],
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent extends BaseComponent<Endereco>{
  
  protected override entityRoute = '/endereco';

  constructor(service: EnderecoService, router: Router){
    super(service, router);
  }
}
