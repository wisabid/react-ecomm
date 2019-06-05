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
    it('display products listing', () => {

    });
    it('displays Add to cart and view on each item listing', () => {

    });
    it('does not display Add to cart if 0 available', () => {

    });
    it('displays a tick when an item is added to cart', () => {

    });
    it('tick mark is disappeared if the item is removed from cart', () => {

    });
    it('a unit is decremented from availability when an item is added to cart', () => {

    });
    it('displays price, category name of an item in the listing', () => {

    });
});
