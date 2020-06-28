import React from "react";
import UnConnectedRestaurant from "../../components/Restaurant";
import { storeFactory, findByTestAttr } from "../../utils/testUtils";
import { mount, shallow } from "enzyme";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(<UnConnectedRestaurant store={store} />);

  return wrapper;
};

describe("render Restraunt connected component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      restaurant: {
        isLoading: false,
        restaurants: [],
      },
    };
    wrapper = setup(initialState);
  });
  test("renders without error", () => {
    const cmp = findByTestAttr(wrapper, "cmp-restraunt-wrapper");
    expect(cmp.length).toBe(1);
  });
  test("should not show the list on load", () => {
    const cmp = findByTestAttr(wrapper, "cmp-search-list");
    expect(cmp.length).toBe(0);
  });
});

describe("render SearchList when restaurant state is updated ", () => {
  const restaurants = [
    { name: "A", address: "A", id: 1 },
    { name: "B", address: "B", id: 2 },
  ];
  test("renders the SearchList when there is items in restaurant array", () => {
    const store = storeFactory({});
    const wrapper = shallow(<UnConnectedRestaurant store={store} />)
      .dive()
      .dive();
    wrapper.setProps({
      restaurants,
    });
    const cmp = findByTestAttr(wrapper, "cmp-search-list");
    expect(cmp.length).toBe(1);
  });
});
