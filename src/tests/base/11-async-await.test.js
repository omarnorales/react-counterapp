import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Tests 11-async await y Fetch', () => {

    test('should return image URL ', async() => {

        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');
    })
})