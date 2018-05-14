/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let cardContainer;

  beforeEach(() => {
    cardContainer = shallow(<CardContainer />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(cardContainer).toMatchSnapshot();
  });

  it('should get the category from received props', () => {

  });

  it('should return the data properly formatted', () => {

  });
});