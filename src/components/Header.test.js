import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  it("should render properly", () => {
    const output = Enzyme.shallow(<Header title="Unit Tests" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it("should handle a click event", () => {
    let props = {
      onHeaderClick: jest.fn(),
      title: "Unit Tests"
    };

    const output = Enzyme.mount(<Header {...props} />);
    const anchorTag = output.find("#logo");
    anchorTag.simulate("click");
    expect(props.onHeaderClick).toHaveBeenCalled();
  });
});
