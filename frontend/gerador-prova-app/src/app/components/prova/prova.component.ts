import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../BaseComponent.generic';
import { Prova } from '../../model/prova.model';
import { ProvaService } from '../../service/prova.service';
import { Router, RouterModule } from '@angular/router';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-prova',
  imports: [
    NgFor,
    RouterModule,
    DatePipe
  ],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent extends BaseComponent<Prova>{

  protected override entityRoute: string = '/prova';
  
  constructor(service: ProvaService, router: Router){
    super(service, router);

  }

}
