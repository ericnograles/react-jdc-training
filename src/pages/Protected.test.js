import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Protected from './Protected';

describe('<Protected>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let actions = {
      logout: jest.fn()
    };
    ReactDOM.render(<Protected actions={actions} />, div);
  });

  it('properly shows given text', () => {
    let actions = {
      logout: jest.fn()
    };
    const output = shallow(<Protected actions={actions} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should log out', () => {
    let actions = {
      logout: jest.fn()
    };
    const output = mount(<Protected actions={actions} />);
    output.find('button').simulate('click');
    expect(actions.logout).toHaveBeenCalled();
  });
});
