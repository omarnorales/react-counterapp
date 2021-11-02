
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';



describe('Tests 09-promises', () => {

    test('should return an Async hero', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done();
        })
    });

    test('should return No se pudo encontrar el héroe', ( done ) => {

        const id = 100;

        getHeroeByIdAsync( id )
        .catch( error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        })
    });
})