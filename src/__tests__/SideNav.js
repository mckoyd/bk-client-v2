import { SideNav } from '../components/SideNav';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        loggedIn: true,
        user: {
            name: 'example',
        },
        sideNavView: true
    }
    const wrapper = shallow(<SideNav {...props} />);
    return {
        props, wrapper
    }
};

describe('<Input />', () => {
    const { wrapper } = setup();
    it('Renders without crashing', () => {
        wrapper;
    })
});