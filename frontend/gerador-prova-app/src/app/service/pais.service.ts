import { Injectable } from '@angular/core';
import { Pais } from '../model/pais.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends GenericService<Pais>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/pais";
    super(handler, url);
  }
}
