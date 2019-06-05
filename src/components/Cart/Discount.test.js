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
  it('loads up all discounts in a drop down', () => {

  });
  it('initial drop down value should be blank', () => {

  });

  it('displays the discounted amount on select of a -5 voucher', () => {

  });
  it('displays error on select of an invalid voucher', () => {

  });
  it('discounts -5 only if total value is greater than or equal to 5', () => {

  });
  it('discounts -10 only if total value is greater than or equal to 50', () => {

  });
  it('discounts -15 only if total value is greater than or equal to 75 with a footwear item included', () => {

  });
  it('hides the discount drop down when a valid voucher is applied', () => {

  });
  it('resets discount on removal of an item from cart', () => {

  });
  it('displays a remove button when discount is applied', () => {

  });
  it('displays discount rounded to 2 decimal points', () => {

  });
});
