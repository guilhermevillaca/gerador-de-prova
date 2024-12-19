import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Usuario } from '../model/usuario';
import { HttpBackend } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{

  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/usuario";
    super(handler, url);
  }

  public entrar(login: any, senha:any): Observable<Usuario>{
    return this.http.get<Usuario>(this.url + '/entrar/' + login + '/' + senha).pipe(map(response => response));    
  }

}
