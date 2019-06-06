import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('<Cart />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  });
  it('displays Cart and logout when logged in ', () => {
    //yet to be implemented
  });
  it('does not display cart and logout on login page', () => {
    //yet to be implemented
  });
  it('takes to Cart screen on click of cart', () => {
    //yet to be implemented
  });
  it('takes to login page on click of logout', () => {
    //yet to be implemented
  });
  it('badge number is added to Cart icon when an item is added to cart', () => {
    //yet to be implemented
  });

});
