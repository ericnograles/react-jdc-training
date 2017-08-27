import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import About from './About';

describe('<About>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let setTitle = jest.fn();
    ReactDOM.render(<About setTitle={setTitle} />, div);
  });

  it('properly shows given text', () => {
    let setTitle = jest.fn();
    const output = shallow(<About setTitle={setTitle} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should set the title of its parent', () => {
    let setTitle = jest.fn();
    const output = mount(<About setTitle={setTitle} />);
    output.find('button').simulate('click');
    expect(setTitle).toHaveBeenCalled();
  });
});
