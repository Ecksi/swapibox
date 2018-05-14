/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  let loading;

  beforeEach(() => {
    loading = shallow(<Loading />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(loading).toMatchSnapshot();
  });

  it('should get the people image if props.loadScreen is people', () => {

  });

  it('should get the planets image if props.loadScreen is people', () => {

  });

  it('should get the vehicles image if props.loadScreen is people', () => {

  });
});