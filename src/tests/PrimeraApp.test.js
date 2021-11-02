import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';


describe('Tests on PrimeraApp', () => {

    // test('should show msg: Hello, Im Goku', () => {

    //     const saludo = 'Hello, Im Goku';
    //     const other = 'other';

    //     const { getByText } = render( <PrimeraApp saludo = {saludo} other = {other} />)

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('should show <PrimeraApp /> correctamente', () => {

        const saludo = 'Hello, Im Goku';
        const other = 'other';

        const wrapper = shallow(<PrimeraApp saludo = {saludo} other = {other} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('should show subtitle setted by props', () => {

        const saludo = 'Hello, Im Goku';
        const other = 'other';
        const subtitle = "I am a subtitle";

        const wrapper = shallow(
        <PrimeraApp 
            saludo = {saludo} 
            other = {other}
            subtitle = {subtitle}/>
        );

        const textP = wrapper.find('p').text();

        expect(textP).toBe(subtitle);
    })
    
})
