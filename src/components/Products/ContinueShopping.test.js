import React from 'react';
import ReactDOM from 'react-dom';
import ContinueShopping from './ContinueShopping';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('<ContinueShopping />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ContinueShopping />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContinueShopping />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  })
})
