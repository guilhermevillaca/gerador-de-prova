import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UsuarioService } from '../../service/usuario.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {    
    constructor(
        private _usuarioService: UsuarioService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {               
        return this._usuarioService.isLoggedIn.pipe(take(1000),
            map((isLoggedIn: boolean) => {                
                if (!isLoggedIn) {
                    this.router.navigate(['/login']);
                    return false;
                }                
                return true;
            })
        )
    }
}