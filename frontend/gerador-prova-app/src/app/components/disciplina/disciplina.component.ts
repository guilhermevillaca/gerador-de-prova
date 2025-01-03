import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { Disciplina } from '../../model/disciplina.model';
import { DisciplinaService } from '../../service/disciplina.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent extends BaseComponent<Disciplina>{
  
  entityRoute = '/disciplina';

  constructor(service: DisciplinaService, router: Router){
    super(service, router);
  }
}
