import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('should be able to figure out the cardType when given props', () => {

  });

  it('should return true if a cards prop.isFavorite is true', () => {

  });

  it('should return false if a cards prop.isFavorite is false', () => {

  });

  it('should return a card with the shape of people when type is people', () => {

  });
  
  it('should return a card with the shape of planets when type is planets', () => {

  });

  it('should return a card with the shape of vehicles when type is vehicles', () => {

  });

  // it should render card with different style properties based on favorites
});