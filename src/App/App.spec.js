import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  it('should have a default state of an empty array for people', () => {
    expect(app.state('people')).toEqual([]);
  });

  it('should have a default state of an empty array for planets', () => {
    expect(app.state('planets')).toEqual([]);
  });

  it('should have a default state of an empty array for vehicles', () => {
    expect(app.state('vehicles')).toEqual([]);
  });

  it('should have a default state of an empty array for favorites', () => {
    expect(app.state('favorites')).toEqual([]);
  });

  it('should have a default state of false for loading', () => {
    expect(app.state('loading')).toEqual(false);
  });

  it('should have a default state of an empty string for loadScreen', () => {
    expect(app.state('loadScreen')).toEqual('');
  });

  it('should fetch the appropiate data when fetchData is called', {

  });

  it('should set the state of loading to true when fetchData is called', () => {

  });

  // the fooData's pattern should be 1 function, easier to test / more dynamic
  it('should set the state of loading to false when peopleData is called', () => {

  });

  it('should set the state of people when peopleData is called', async () => {
    const mockPeopleData = jest.fn();
    await app.mockPeopleData;


    expect(mockPeopleData).toEqual({});
  });

  it('should set the state of planets when planetData is called', async () => {

  });

  it('should set the state of vehicles when vehicleData is called', async () => {

  });

  it('should reset the states of people, planets, and vehicles when favorites is called', async () => {

  });

  it('should add a card to the state of favorites when called', () => {

  });


});