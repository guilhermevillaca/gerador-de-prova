import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private _usuarioService: UsuarioService){

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
