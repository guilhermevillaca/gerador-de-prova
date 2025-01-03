import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Alternativa } from '../model/alternativa.model';
import { HttpBackend } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService extends GenericService<Alternativa>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/alternativa";
    super(handler, url);
  }

  public findByQuestao(questao: any): Observable<Alternativa[]> {
    return this.http.get<Alternativa[]>(this.url + '/findByQuestao/' + questao).pipe(map(response => response));
  }

  findByQuestao_(questao: any): Observable<Alternativa[]> {
    return this.http.get<Alternativa[]>(`/api/questoes/${questao.id}/alternativas`);
  }
}
