import React from 'react';
import { shallow, mount } from 'enzyme';
import Posts from './index';
import { findByClassName } from '../../../Utils/index';

const setUp = (props) => {
    const component = shallow(<Posts {...props} />);
    return component;
};

const setUpMount = props => {
    const component = mount(<Posts {...props} />);
    return component;
}

describe('Posts Component', () => {
    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            component = setUp(props);
        });

        it('Should render without props', () => {
            let wrapper = findByClassName(component, 'postsComponent');
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
        
        it('Should render a posts button ', () => {
            let wrapper = findByClassName(component, 'renderPosts');
            expect(wrapper.length).toBe(1);
        }); 

        describe('Render Posts', () => {
            let component;
            beforeEach(() => {
                const props = {
                    header: 'Test Header',
                    desc: 'Test Desc'
                };
                component = setUpMount(props);
            })

            it('Should render button works as expexted', () => {
                const button = findByClassName(component, 'renderPosts');
                button.simulate("click");
                const posts = findByClassName(component, 'posts');
                expect(posts).toHaveLength(3);
            })
        })
    });

    describe('Have NO props', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should not render', () => {
            let wrapper = findByClassName(component, 'postsComponent');
            expect(wrapper.length).toBe(0);
        })
    });
});
