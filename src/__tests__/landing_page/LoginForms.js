import { LoginForms } from '../../components/landing_page/LoginForms';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        parentLogin: true,
        childLogin: false
    }
    const wrapper = shallow(<LoginForms {...props} />);
    return {
        props, wrapper
    }
};

describe('<LoginForms />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});
