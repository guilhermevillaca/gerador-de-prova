import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { BancoQuestoes } from '../model/bancoquestoes.model';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BancoQuestoesService extends GenericService<BancoQuestoes>{

  constructor(handler: HttpBackend) { 
      let url = "http://localhost:8080/banco-questoes";
      super(handler, url);
  }

}
