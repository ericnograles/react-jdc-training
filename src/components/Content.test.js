import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Content from "./Content";

Enzyme.configure({ adapter: new Adapter() });

describe("Content", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    let setTitle = jest.fn();
    ReactDOM.render(<Content setTitle={setTitle} />, div);
  });

  it("properly shows given text", () => {
    let setTitle = jest.fn();
    const output = Enzyme.shallow(
      <Content text="Unit Tests" setTitle={setTitle} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
