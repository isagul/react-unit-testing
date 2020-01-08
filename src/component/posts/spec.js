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
        
        it('Should render a posts button', () => {
            let wrapper = findByClassName(component, 'renderPosts');
            expect(wrapper.length).toBe(1);
        }); 

        it('Should render_posts button text works as expected', () => {
            let wrapper = findByClassName(component, 'renderPosts');
            expect(wrapper.text()).toBe('Render Posts');
        }); 

        it('Should render a add post button ', () => {
            let wrapper = findByClassName(component, 'addNewPost');
            expect(wrapper.length).toBe(1);
        }); 

        it('Should render a add post button ', () => {
            let wrapper = findByClassName(component, 'addNewPost');
            expect(wrapper.text()).toBe('Add Post');
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

            it('Should render_posts button works as expexted', () => {
                const button = findByClassName(component, 'renderPosts');
                button.simulate("click");
                const posts = findByClassName(component, 'posts');
                expect(posts).toHaveLength(3);
            })

            it('Should add_post button works as expexted', () => {
                const renderPostBtn = findByClassName(component, 'renderPosts');
                renderPostBtn.simulate("click");
                const addButton = findByClassName(component, 'addNewPost');
                addButton.simulate("click");                
                const posts = findByClassName(component, 'posts');
                expect(posts).toHaveLength(4);
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
