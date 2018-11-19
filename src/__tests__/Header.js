import { Header } from '../components/Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />)
    })
});
