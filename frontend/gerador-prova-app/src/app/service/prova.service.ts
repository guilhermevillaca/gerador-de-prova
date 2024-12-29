import { Injectable } from '@angular/core';
import { Prova } from '../model/prova.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvaService extends GenericService<Prova>{
  
  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/prova";
    super(handler, url);
  }
}
