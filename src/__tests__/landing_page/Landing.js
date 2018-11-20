import { Landing } from '../../components/landing_page/Landing';
import React from 'react';
import { shallow } from 'enzyme';

const setup = () => {
    const props = {
        loggedIn: true,
        user: {
            name: 'example',
        },
        loading: false
    }
    const wrapper = shallow(<Landing {...props} />);
    return {
        props, wrapper
    }
};

describe('<Landing />', () => {
    const { wrapper } = setup()
    it('Renders without crashing', () => {
        wrapper;
    })
});
