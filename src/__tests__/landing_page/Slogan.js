import { Slogan } from '../../components/landing_page/Slogan';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Slogan />', () => {
    it('Renders without crashing', () => {
        shallow(<Slogan />);
    })
});
