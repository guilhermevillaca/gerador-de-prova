import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Alternativa } from '../model/alternativa.model';
import { HttpBackend } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService extends GenericService<Alternativa>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/alternativa";
    super(handler, url);
  }

  public findByQuestao(id_questao: number){
    return this.http.get(this.url + '/findByQuestao/' + id_questao).pipe(map(response => response));
  }
}
