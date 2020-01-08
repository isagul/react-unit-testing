import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {findByClassName} from '../Utils/index';

const setUp = () => {
    const component = shallow(<App/>);
    return component;
};

describe('App Component', () => {

    let component;
    let mockFn;

    beforeEach(() => {
        component = setUp();
        mockFn = jest.fn();
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('Should render without errors', () => {
        const wrapper = findByClassName(component, 'appComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should returnAsNumber works as expected', () => {
        const instance = component.instance();
        const newValue = instance.returnAsNumber(6);
        expect(newValue).toBe(7);
    });

    it('Should count is 0 as default', () => {
        let wrapper = findByClassName(component, 'countText');
        expect(wrapper.text()).toEqual('0');
    });

    it('Should changeCountValue works as expected', () => {
        const instance = component.instance();
        instance.changeCountValue();
        const newState = instance.state.count;
        expect(newState).toBe(1);
    });

    /* test('Should mock function works as expected', () => {
        const mockImp = mockFn.mockImplementation(number => 42 + number);
        const result = mockImp(1)
        expect(result).toBe(43);
    }); */    

    test('Should change count button works as expected', () => {
        const instance = component.instance();
        const button = findByClassName(component, 'changeButton');
        button.simulate('click');
        const newState = instance.state.count;
        expect(newState).toBe(1);
    })
})
