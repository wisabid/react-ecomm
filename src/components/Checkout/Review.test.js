import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('<Review />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Review />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Review />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  });
  it('displays no items in cart message when empty', () => {

  });
  it('displays Continue Shopping button when there is no items in cart', () => {

  });
  it('displays Selected products in cart when there are items selected', () => {

  });
  it('does not display shipping and payment if its cart page', () => {

  });
});
