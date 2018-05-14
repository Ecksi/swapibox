/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});