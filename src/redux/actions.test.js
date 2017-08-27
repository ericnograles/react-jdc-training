import configureStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import * as actions from './actions';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('profile actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an action to retrieve a profile for a given access token', () => {
    const store = mockStore({
      profile: {
        isAuthenticated: false
      }
    });

    const expectedActions = [
      {
        type: actions.ProfileActions.RECEIVE_PROFILE,
        profile: {
          email: 'TODO: email',
          firstName: 'TODO: firstName',
          lastName: 'TODO: lastName'
        }
      }
    ];

    store.dispatch(actions.retrieveProfileFromToken('some_token'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
