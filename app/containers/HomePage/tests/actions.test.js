import { CHANGE_USERNAME } from '../constants';

import { changeSlug } from '../actions';

describe('Home Actions', () => {
  describe('changeSlug', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture
      };

      expect(changeSlug(fixture)).toEqual(expectedResult);
    });
  });
});
