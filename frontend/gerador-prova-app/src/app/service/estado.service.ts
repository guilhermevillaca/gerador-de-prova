import { Injectable } from '@angular/core';
import { Estado } from '../model/estado.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService extends GenericService<Estado>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/estado";
    super(handler, url);
  }
}
