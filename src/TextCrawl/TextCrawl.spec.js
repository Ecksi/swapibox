// import React from 'react';
// import { shallow } from 'enzyme';
import TextCrawl from './TextCrawl';
import mockDirtyData from '../__mocks__/mockDirtyData';


describe('textCrawl', () => {
  let textCrawl;

  beforeEach(() => {
    textCrawl = new TextCrawl();

    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        status: 'ok',
        json: () => Promise.resolve(mockDirtyData.films)
      });
    });
  });

  it('should call the api with the correct url', async () => {
    const filmUrl = 'https://swapi.co/api/films/';
    await textCrawl.componentDidMount();

    expect(window.fetch).toHaveBeenCalledWith(filmUrl);
  });
});