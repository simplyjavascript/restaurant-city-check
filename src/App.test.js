import React from "react";
import { shallow } from "enzyme";
import App from "./App";

// Default Setup
const defaultProps = {};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<App {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders App component with Restaurant component.", () => {
  const wrapper = setup();
  const restaurantCmp = wrapper.find(`[data-test="cmp-test-wrapper"]`);
  expect(restaurantCmp.length).toBe(1);
});
