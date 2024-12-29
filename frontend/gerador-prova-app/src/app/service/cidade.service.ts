import { Injectable } from '@angular/core';
import { Cidade } from '../model/cidade.model';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends GenericService<Cidade>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/cidade";
    super(handler, url);
  }
}

