import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AutenticacaoService } from "./acesso/service/autenticacao.service";

@Injectable()
export class AutenticacaoGuard implements CanActivate{

    constructor(
        private router: Router,
        private autenticacaoService: AutenticacaoService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let autenticado: boolean = this.autenticacaoService.autenticado();
        if (!autenticado) {
            this.router.navigate(['/']);
        }
        return autenticado;
    }

}