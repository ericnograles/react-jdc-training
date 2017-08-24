import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Protected from './Protected';

describe('<Protected>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let logout = jest.fn();
    ReactDOM.render(<Protected logout={logout} />, div);
  });

  it('properly shows given text', () => {
    let logout = jest.fn();
    const output = shallow(<Protected logout={logout} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should log out', () => {
    let logout = jest.fn();
    const output = mount(<Protected logout={logout} />);
    output.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
  });
});
