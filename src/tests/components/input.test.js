import React from "react";
import { shallow } from "enzyme";
import Input from "../../components/Input";
import { findByTestAttr } from "../../utils/testUtils";

// Default Setup
const defaultProps = {};
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Input {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders Input component.", () => {
  const wrapper = setup();
  const inputCmp = wrapper.find(`[data-test="inputWrapper"]`);
  expect(inputCmp.length).toBe(1);
});

test("Input component has correct input props.", () => {
  const wrapper = setup({ inputVal: "toronto", placeholder: "Search" });
  const inputCmp = wrapper.find(`[data-test="search-input"]`);
  expect(inputCmp.props()).toEqual({
    type: "text",
    value: "toronto",
    "data-test": "search-input",
    id: "searchItem",
    placeholder: "Search",
    onChange: expect.any(Function),
  });
});

test("OnChange has been called properly when input is updated", () => {
  const props = {
    updateSearch: jest.fn(),
  };
  const wrapper = setup({ ...props });
  const mockEvent = { target: { value: "toronto" } };
  const inputText = findByTestAttr(wrapper, "search-input");
  inputText.simulate("change", mockEvent);
  expect(props.updateSearch).toHaveBeenCalledWith(mockEvent.target.value);
});
