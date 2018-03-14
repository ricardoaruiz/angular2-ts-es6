import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AutenticacaoService } from "./acesso/service/autenticacao.service";

@Injectable()
export class AutenticacaoGuard implements CanActivate{

    constructor(
        private autenticacaoService: AutenticacaoService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.autenticacaoService.autenticado();
    }

}