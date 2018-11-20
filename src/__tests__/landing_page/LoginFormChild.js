import { LoginFormChild } from '../../components/landing_page/LoginFormChild';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        error: null,
        handleSubmit: jest.fn
    }
    const wrapper = shallow(<LoginFormChild {...props} />);
    return {
        props, wrapper
    }
};

describe('<LoginFormChild />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});
