import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';
 

describe('Tests 08-imp-exp on heroes methods ', () => {

    test('should return an hero by Id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id );

        expect( heroe ).toEqual(heroeData);

    });

    test('should return undefined if heroes doesnt exists', () => {

        const id = 2000;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);

    });

    test('should return DC heroes', () => {

        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner );

        expect( heroe ).toEqual(heroeData);

    });

    test('should return Marvel heroes', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner );

        expect( heroe ).toEqual(heroeData);

    });

    test('should return Marvel heroes array length', () => {

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner );

        expect( heroe.length ).toBe(heroeData.length);

    });

    


})