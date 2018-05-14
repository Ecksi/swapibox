/* eslint-disable */
import fetchData from './ApiCalls';
import mockCleanData from '../__mocks__/mockCleanData';
import mockDirtyData from '../__mocks__/mockDirtyData';

describe('ApiCalls', () => {

  describe('fetchPeople', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 'ok',
        json: () => Promise.resolve(mockDirtyData.people)
      }));
    });

    it('should return unformatted data on successful fetch call', async () => {
      const peopleUrl = 'https://swapi.co/api/people/';
      await fetchData('people');

      expect(window.fetch).toHaveBeenCalledWith(peopleUrl);
    });

    it('should format the data returned', async () => {
      const cleanPeopleData = mockCleanData.people;
      const peopleUrl = 'https://swapi.co/api/people';

      await fetchData('people');

      expect(await fetchData('people')).toEqual(cleanPeopleData);
      
    });
  
    it('should throw an error when the fetch fails', () => {

    });
  });

  describe('fetchPlanets', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 'ok',
        json: () => Promise.resolve(mockDirtyData.planets)
      }));
    });

    it('should return unformatted data on successful fetch call', async () => {
      const planetsUrl = 'https://swapi.co/api/planets/';
      await fetchData('planets');

      expect(window.fetch).toHaveBeenCalledWith(planetsUrl);
    });
  });

  describe('fetchVehicles', () => {

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 'ok',
        json: () => Promise.resolve(mockDirtyData.vehicles)
      }));
    });

    it('should return unformatted data on successful fetch call', async () => {
      const vehiclesUrl = 'https://swapi.co/api/vehicles/';
      await fetchData('vehicles');

      expect(window.fetch).toHaveBeenCalledWith(vehiclesUrl);
    });
  });
});