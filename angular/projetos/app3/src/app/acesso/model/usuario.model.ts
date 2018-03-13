import { FormGroup } from '@angular/forms';

export class Usuario {

    constructor(
        public email?: string,
        public nomeCompleto?: string,
        public nomeUsuario?: string,
        public senha?: string
    ) {}

    public static buildFromFormGroup(form: FormGroup): Usuario {
        let usuario: Usuario = new Usuario();

        Object.keys(usuario).forEach( key => {
            if (form.controls[key]) {
                usuario[key] = form.controls[key].value;
            }
        })

        return usuario;
    }

}