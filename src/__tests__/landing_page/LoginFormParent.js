import { LoginFormParent } from '../../components/landing_page/LoginFormParent';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        error: null,
        handleSubmit: jest.fn
    }
    const wrapper = shallow(<LoginFormParent {...props} />);
    return {
        props, wrapper
    }
};

describe('<LoginFormParent />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});
