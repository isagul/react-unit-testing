import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './index';
import { findByClassName } from '../../../Utils/index';
import { act } from "react-dom/test-utils";

const setUp = (props) => {
    const component = shallow(<Footer {...props} />);
    return component;
};

describe('Footer Component', () => {
    describe('Have props', () => {
        let component;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
                emitEvent: mockFunc
            };
            component = setUp(props);
        });

        it('Should render without props', () => {
            let wrapper = findByClassName(component, 'footerComponent');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a footer title', () => {
            let wrapper = findByClassName(component, 'header');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a desc', () => {
            let wrapper = findByClassName(component, 'desc');
            expect(wrapper.length).toBe(1);
        });        
    });

    describe('Have NO props', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should not render', () => {
            let wrapper = findByClassName(component, 'footerComponent');
            expect(wrapper.length).toBe(0);
        })
    });
});
