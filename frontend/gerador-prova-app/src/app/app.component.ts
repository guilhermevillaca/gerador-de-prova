import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './service/usuario.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'gerador-prova-app';

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private _usuarioService: UsuarioService, private router: Router){

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this._usuarioService.isLoggedIn;
  }


  public sair(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(['']);        
  }

  public validar(){
    const storedData = localStorage.getItem('access_token'); // ou o nome da chave que você usou para armazenar os dados
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const token = parsedData.token;
      this._usuarioService.validar(token).subscribe(
        retorno => {
          console.log(retorno);
        },
        erro => {},
      );
      
    }

    
  }

}
