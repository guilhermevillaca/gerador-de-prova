import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Alternativa } from '../model/alternativa';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService extends GenericService<Alternativa>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/alternativa";
    super(handler, url);
  }
}
