import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Pessoa } from '../model/pessoa.model';
import { HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends GenericService<Pessoa>{

  constructor(handler: HttpBackend, private router: Router) { 
    let url = "http://localhost:8080/pessoa";
    super(handler, url);
  }

}
