import { Logo } from '../components/Logo';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Logo />', () => {
    it('Renders without crashing', () => {
        shallow(<Logo />);
    })
});
