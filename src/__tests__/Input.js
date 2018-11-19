import { Input } from '../components/Input';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        meta: {
            touched: false,
            error: null
        },
        input: {
            name: 'example',
            type: 'text',
            placeholder: 'example',
        }
    }
    const wrapper = shallow(<Input {...props} />);
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