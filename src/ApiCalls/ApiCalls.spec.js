import  { fetchPeople } from './ApiCalls';
import mockNetworkDatabbb from '../DataCleaner/DataCleaner';

describe('ApiCalls', () => {
  describe('fetchPeople', () => {
    it('should return an object with the correct shape on successful fetch call', () => {
      // Setup
      const expected = [{
        name: 'jim',
        homeworld: 'turing',
        species: 'asian',
        language: 'jibberish',
        population: '1',
      }];
      const mockNetworkData = mockNetworkDatabbb;
      const jsonParsePromise = Promise.resolve(mockNetworkData);
      const response = { json: () => jsonParsePromise };
      const successfulFetchPromise = Promise.resolve(response);

      window.fetch = jest.fn().mockImplementation(() => {
        successfulFetchPromise;
      });

      // setup before each wtih window.fetch
      // Execution
      // fetches with right url
      // expected data given back (cleaned Data)
      // calls other methods (with right info)
      // throws error if status 500
      // ok: 'true' == status: 200

      // Expectation
      expect(window.fetch).toEqual(expected);
    });
  });
});