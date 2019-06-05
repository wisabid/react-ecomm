import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import Discount from './Discount';

describe('<Discount />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Discount discounts={[]}/>)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Discount discounts={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  })
});
