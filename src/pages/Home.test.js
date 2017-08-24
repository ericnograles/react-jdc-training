import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from './Home';

describe('<Home>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let login = jest.fn();
    let auth = {
      isAuthenticated: false
    };
    let location = {
      state: { from: '/protected' }
    };
    ReactDOM.render(
      <Home login={login} auth={auth} location={location} />,
      div
    );
  });

  it('properly shows login when not authenticated', () => {
    let login = jest.fn();
    let auth = {
      isAuthenticated: false
    };
    let location = {
      state: { from: '/protected' }
    };
    const output = shallow(
      <Home login={login} auth={auth} location={location} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
