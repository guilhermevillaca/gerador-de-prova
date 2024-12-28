import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Professor } from '../model/professor';
import { HttpBackend } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService  extends GenericService<Professor>{

  constructor(handler: HttpBackend, private router: Router) { 
    let url = "http://localhost:8080/professor";
    super(handler, url);
  }
  
}
