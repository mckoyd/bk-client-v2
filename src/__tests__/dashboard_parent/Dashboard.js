import { Dashboard } from '../../components/dashboard_parent/Dashboard';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    })
});
