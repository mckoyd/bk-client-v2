import App from '../components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('<App \>', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    })
});
