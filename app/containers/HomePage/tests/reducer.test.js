import homeReducer from '../reducer';
import { changeSlug } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      username: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeSlug action correctly', () => {
    const fixture = 'flexdinesh';
    const expectedResult = { ...state, username: fixture };

    expect(homeReducer(state, changeSlug(fixture))).toEqual(expectedResult);
  });
});
