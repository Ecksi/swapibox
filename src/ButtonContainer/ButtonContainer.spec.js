import React from 'react';
import { shallow } from 'enzyme';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {
  let buttonContainer;

  beforeEach(() => {
    buttonContainer = shallow(<ButtonContainer />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(buttonContainer).toMatchSnapshot();
  });

  it('should call fetchData from props when clicked', () => {

  });
});