import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends GenericService<Endereco>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/endereco";
    super(handler, url);
  }
}
