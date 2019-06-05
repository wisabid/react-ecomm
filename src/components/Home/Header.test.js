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
  })

});
