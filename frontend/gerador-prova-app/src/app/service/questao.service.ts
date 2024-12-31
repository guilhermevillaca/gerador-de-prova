import { Injectable } from '@angular/core';
import { Questao } from '../model/questao.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService extends GenericService<Questao>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/questao";
    super(handler, url);
  }

  public findByProva(id_prova: number){
    return this.http.get(this.url + '/findByProva/' + id_prova).pipe(map(response => response));
  }
}
