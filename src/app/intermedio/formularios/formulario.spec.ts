import { FormularioRegister } from "./formulario";
import {FormBuilder} from "@angular/forms";

describe('pruebas para formulario', () => {
    let componente: FormularioRegister;
    beforeEach(() => {
        componente = new FormularioRegister(new FormBuilder());
    });

    it('Debe crear un formulario con dos campos, email, password', () => {
        expect(componente.form.contains('email')).toBe(true);
        expect(componente.form.contains('password')).toBe(true);
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
        expect(componente.form.contains('password')).toBe(true);
    });
    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('password');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El campo email no debe ser válido si se ingresa una estructura diferente a una tipo email', () => {
        const control = componente.form.get('email');
        control.setValue('alejo@');
        expect(control.valid).toBeFalsy();
    });
    it('El campo email debe ser válido si se ingresa un tipo de dato con formato correcto de email', () => {
        const control = componente.form.get('email');
        control.setValue('alejo@hotmail.com');
        expect(control.valid).toBeTruthy();
    });

});
