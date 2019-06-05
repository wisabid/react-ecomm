import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import SelectedProducts from './SelectedProducts';
import {UserContext} from '../../context/userContext';

describe('<SelectedProducts />', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SelectedProducts usersCart={[]}/>)
    // jest.mock('../../context/userContext');

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<UserContext.Provider value={{
        settotal : () => 0        
      }}><SelectedProducts usersCart={[]}/></UserContext.Provider>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('matches the snapshop', () => {
        expect(renderer).toMatchSnapshot();
    })
});
