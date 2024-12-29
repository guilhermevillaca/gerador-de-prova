import { Injectable } from '@angular/core';
import { Disciplina } from '../model/disciplina.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService extends GenericService<Disciplina>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/disciplina";
    super(handler, url);
  }
}
