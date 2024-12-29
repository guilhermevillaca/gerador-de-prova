import { Injectable } from '@angular/core';
import { Questao } from '../model/questao.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService extends GenericService<Questao>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/questao";
    super(handler, url);
  }
}
