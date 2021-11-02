/*
    npm run test
*/

describe('Tests on file demo.js', () => {

    test('Strings should be equal', () => {
        
        // 1. initialize
        const msg = 'Hola mundo';
    
        // 2. stimulating
        const msg2 = `Hola mundo`;
    
        // 3. Check behaviour 
        // Working with JEST --> https://jestjs.io/docs/expect
        expect(msg).toBe(msg2);
    })
   
})


