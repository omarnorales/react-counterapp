
import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('Tests 02-template-string', () => {

    test('Test method getSaludo should return Hola Odel', () => {

        const name = 'Odel';

        const saludo = getSaludo(name);

        expect( saludo ).toBe(`Hola ${ name }`);
    })

    // getSaludo should return Hola User if argument name is not provided 
    test('Test method getSaludo should return Hola User', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe(`Hola User`);
    })
})