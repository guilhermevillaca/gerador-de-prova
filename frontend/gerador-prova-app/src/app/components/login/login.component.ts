import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;   
  form = new FormGroup({
    login: new FormControl<string>(''),
    senha: new FormControl<string>(''),    
  });

  constructor(private _usuarioService: UsuarioService, private router: Router){

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this._usuarioService.isLoggedIn;   
  }

  public entrar(): void{
    this._usuarioService.entrar(this.form.controls.login.value, this.form.controls.senha.value).subscribe(
      token => {
        console.log(token);
        if(token){
          this._usuarioService.setAccesso(token);
          this.router.navigate(['home']);        
        } else {
          alert("Você errou!");        
        }        
      },
      erro => {
        console.log(erro);
      }
    );    
    
  }

}
