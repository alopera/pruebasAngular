import { Jugador2 } from "./jugador2";

describe('Jugador 2 Emit', () => {
    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe emitir un evento cuando recibe daño', () => {
        let nuevoHp;
        jugador.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });
        jugador.recibeDanio(100);
        expect(nuevoHp).toBe(0);
    });
    it('Debe emitir un evento con el hp mayor que 0', () => {
        let nuevoHp;
        jugador.hpCambia.subscribe( hp => {
            nuevoHp = hp;
        });
        jugador.recibeDanio(20);
        expect(nuevoHp).toBeGreaterThan(0);
    });
});
