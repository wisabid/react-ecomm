import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App';

describe('<App />', () => {
  const renderer = new ShallowRenderer()
  renderer.render(<App />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('matches the snapshop', () => {
    expect(renderer).toMatchSnapshot();
  })
})
