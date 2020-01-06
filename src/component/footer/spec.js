import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import { findByClassName } from '../../../Utils/index';

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

        it('Should render a increment button', () => {
            let wrapper = findByClassName(component, 'incrementButton');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a decrement button', () => {
            let wrapper = findByClassName(component, 'decrementButton');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a count field', () => {
            let wrapper = findByClassName(component, 'count');
            expect(wrapper.length).toBe(1);
        });

        it('Should count is 0', () => {
            let wrapper = findByClassName(component, 'count');
            expect(wrapper.text()).toEqual('0');
        });

        describe('Count Functions', () => {
            it('Should emit callback on click event', () => {
                const wrapper = findByClassName(component, 'incrementButton');
                wrapper.simulate('click');
                const callback = mockFunc.mock.calls.length;
                expect(callback).toBe(1);
            });
        })
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
