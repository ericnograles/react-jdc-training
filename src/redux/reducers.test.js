import { profile } from './reducers';
import * as ActionTypes from './actions';

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile(undefined, {})).toEqual({
      isAuthenticated: false
    });
  });

  it('should receive a profile and set to authenticated', () => {
    let receiveProfile = {
      type: ActionTypes.ProfileActions.RECEIVE_PROFILE,
      profile: {
        firstName: 'Unit',
        lastName: 'Test',
        email: 'unit@test.org'
      }
    };

    expect(profile(undefined, receiveProfile)).toEqual(
      Object.assign({}, receiveProfile.profile, { isAuthenticated: true })
    );
  });

  it('should logout', () => {
    expect(
      profile(undefined, { type: ActionTypes.ProfileActions.LOGOUT })
    ).toEqual({
      isAuthenticated: false
    });
  });
});
