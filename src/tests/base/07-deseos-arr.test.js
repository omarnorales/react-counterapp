import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deseos-arr';

describe('Tests en 07-deseos-arr desestructuracion ', () => {

    test('retornaArreglo', () => {
        
        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
})