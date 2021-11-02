import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';


describe('Tests on CounterApp', () => {

    let wrapper = shallow(<CounterApp value = { 10 } />);

    beforeEach(() => {

        wrapper = shallow(<CounterApp value = { 10 } />);

    })

    test('should show <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should show counter', () => {

        const textH2 = wrapper.find('h2').text().trim();
        console.log(textH2);

        expect(textH2).toBe(`10`);
    });

    test('should increase counter +1 at click', async () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const textH2 = wrapper.find('h2').text().trim();
        console.log('Counter val: ',textH2);
        expect(textH2).toBe('11');
        
    });

    test('should decrease counter -1 at click', async () => {
        const btn1 = wrapper.find('button').at(2).simulate('click');
        const textH2 = wrapper.find('h2').text().trim();
        console.log('Counter val: ',textH2);
        expect(textH2).toBe('9');
        
    });

    test('should place default value with btn reset', () => {

        let wrapper = shallow(<CounterApp value = { 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');

    });
    
    
})
