import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo, saludar3, saludar4 } from '../../base/05-funciones';


describe('Tests 05-funciones', () => {

    test('Test method saludo3 should return Hola Omar', () => {

        const name = 'Omar';
        const saludo3 = saludar3(name);

        expect( saludo3 ).toBe(`Hola, ${name}`);

    })

    test('Test method saludo4 should return Hola Mundo', () => {

        
        expect( saludar4() ).toBe(`Hola Mundo`);

    })

    test('Test method getUser should return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect( user ).toStrictEqual(userTest);

    })

    test('Test method getUsuarioActivo should return an object', () => {

        const userActivoTest = {
            uid: 'ABC567',
            username: 'Omar'
        }

        const user = getUsuarioActivo('Omar');
        expect( user ).toStrictEqual(userActivoTest);

    })
})