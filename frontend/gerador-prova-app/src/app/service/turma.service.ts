import { Injectable } from '@angular/core';
import { Turma } from '../model/turma.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService extends GenericService<Turma>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/turma";
    super(handler, url);
  }
}
