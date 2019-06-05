import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import Cart from './Cart';

describe('<Cart />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Cart />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  })
})

