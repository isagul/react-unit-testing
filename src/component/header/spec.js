import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByClassName } from '../../../Utils/index';

const setUp = () => {
    const component = shallow(<Header />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = findByClassName(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    })

    it('Should render a title', () => {
        const wrapper = findByClassName(component, 'title');
        expect(wrapper.length).toBe(1);
    })

    it('Should render a logo', () => {
        const wrapper = findByClassName(component, 'logo');
        expect(wrapper.length).toBe(1);
    })
})