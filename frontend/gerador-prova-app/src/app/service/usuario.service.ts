import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Usuario } from '../model/usuario';
import { HttpBackend, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Configuration } from '../configuration';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{

  private loggedIn = new BehaviorSubject<boolean>(false);   


  constructor(handler: HttpBackend) { 
    let url = "http://localhost:8080/usuario";
    super(handler, url);
  }

  public entrar(login: any, senha:any): Observable<any>{
    return this.http.get<any>(this.url + '/entrar/' + login + '/' + senha).pipe(map(response => response));
  }

  get isLoggedIn() {
    if(localStorage.getItem("access_token") !=null && this.isLogged()){      
      this.loggedIn.next(true);      
    }else{      
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();     
  }
  
  public setAccesso(usuario:any) {    
    localStorage.setItem("access_token", JSON.stringify(usuario));    
    this.loggedIn.next(true);          
  }  

  isLogged() {    
    return this.loggedIn.value;
  } 

  public validar(token: any){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(this.url + '/validar', {headers}).pipe(map(response => response));
  }

}
