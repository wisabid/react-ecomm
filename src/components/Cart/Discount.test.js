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
    //yet to be implemented
  });
  it('initial drop down value should be blank', () => {
    //yet to be implemented
  });

  it('displays the discounted amount on select of a -5 voucher', () => {
    //yet to be implemented
  });
  it('displays error on select of an invalid voucher', () => {
    //yet to be implemented
  });
  it('discounts -5 only if total value is greater than or equal to 5', () => {
    //yet to be implemented 
  }); 
  it('discounts -10 only if total value is greater than or equal to 50', () => {
    //yet to be implemented
  });
  it('discounts -15 only if total value is greater than or equal to 75 with a footwear item included', () => {
    //yet to be implemented
  });
  it('hides the discount drop down when a valid voucher is applied', () => {
    //yet to be implemented
  });
  it('resets discount on removal of an item from cart', () => {
    //yet to be implemented
  });
  it('displays a remove button when discount is applied', () => {
    //yet to be implemented
  });
  it('displays discount rounded to 2 decimal points', () => {
    //yet to be implemented
  });
});
