import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export class AutenticacaoGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

}