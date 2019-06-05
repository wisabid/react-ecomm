import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Album';
import ShallowRenderer from 'react-test-renderer/shallow';
import categories from '../../services/mocks/categories.json';

describe('<Products />', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Products categories={[]} products={[]}/>)
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Products categories={[]} products={[]}/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('matches the snapshop', () => {
        expect(renderer).toMatchSnapshot();
      })
});
