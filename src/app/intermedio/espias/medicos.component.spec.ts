import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);
    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });

    it('debe cargar los medicos', () => {
        const medicos = ['dr Alvaro', 'dr Fernando', 'dr Alejandro', 'dra Diana'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return Observable.from(medicos);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('debe de llamar al servidor para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
            return Observable.empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });
    
    it('debe agregar un medico al array de medicos del componente', () => {
        const medico = {nombre: 'dr alejo', id: 6345654654};
        spyOn(servicio, 'agregarMedico').and.returnValue(() => {
            return Observable.from([medico]);
        });
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });
});


