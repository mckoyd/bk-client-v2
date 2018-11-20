import { ParentCards } from '../../components/dashboard_parent/ParentCards';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        childInfo: [],
        user: {
            name: 'example',
        }
    }
    const wrapper = shallow(<ParentCards {...props} />);
    return {
        props, wrapper
    }
};

describe('<ParentCards />', () => {
    const { wrapper } = setup();
    it('Renders without crashing', () => {
        wrapper;
    })
});