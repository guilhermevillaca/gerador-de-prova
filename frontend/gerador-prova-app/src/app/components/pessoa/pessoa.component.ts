import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent extends BaseComponent<Pessoa>{

  protected override entityRoute: string = '/pessoa';

  constructor(service: PessoaService, router: Router){
    super(service, router);
  }
  

}
