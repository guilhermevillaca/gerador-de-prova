import { Injectable } from '@angular/core';
import { Telefone } from '../model/telefone.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService extends GenericService<Telefone>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/telefone";
    super(handler, url);
  }
}