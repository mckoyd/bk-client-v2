import { SignupFormChild } from '../../components/dashboard_parent/SignupFormChild';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        loggedIn: true,
        user: {
            name: 'example',
        },
        error: null,
        handleSubmit: jest.fn()
    }
    const wrapper = shallow(<SignupFormChild {...props} />);
    return {
        props, wrapper
    }
};

describe('<SignupFormChild />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});
