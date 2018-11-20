import { SignupFormParent } from '../../components/signup_page/SignupFormParent';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        loggedIn: false,
        error: null,
        isParent: false,
        handleSubmit: jest.fn()
    }
    const wrapper = shallow(<SignupFormParent {...props} />);
    return {
        props, wrapper
    }
};

describe('<SignupFormParent />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});