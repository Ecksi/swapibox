import React from 'react';
import { shallow } from 'enzyme';
import favorites from './Favorites';

describe('Favorites', () => {
  let favorites;

  beforeEach(() => {
    favorites = shallow(<Favorites />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(favorites).toMatchSnapshot();
  });

  it('should add a card to the favorites array', () => {

  });

  it('should not add the same card more than once to the favorites array' () => {

  });

  it('should remove the card from the favorites array if it is clicked a second time', () => {

  });
});