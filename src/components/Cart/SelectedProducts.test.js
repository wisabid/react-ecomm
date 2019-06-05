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
    });

    it('loads up all selected items in the listing', () => {

    });

    it('Continue shopping and checkout buttons are present when there are items in cart', () => {

    });
    it('Continue shopping button should be present even if there is no items added to cart', () => {

    });
    it('displays remove from cart button with each item on cart', () => {

    });
    it('shows up price of an item multiplied by units', () => {

    });
    it('shows total price', () => {

    });
    it('displays discount section', () => {

    });
    it('removes a single unit of an item when remove icon is clicked', () => {

    });
    it('displays quantity of an item selected', () => {

    });
    it('displays Cart title if its Cart screen', () => {

    });
    it('redirects to homepage on click of Continue shopping button', () => {

    });
    it('takes to Checkout page when Checkout button is clicked', () => {

    });
});
