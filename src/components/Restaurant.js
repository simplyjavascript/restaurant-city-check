import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import Input from "./Input";
import SearchList from "./SearchList";

export class UnConnectedRestaurant extends Component {
  state = {
    search: "",
    nameFilter: "",
    refine: "",
  };
  updateSearch = (searchVal) => {
    this.setState((prevState) => ({
      search: searchVal,
    }));
  };
  updateNameFilter = (val) => {
    console.log("Value search", val);
    this.setState((prevState) => ({
      refine: val,
    }));
  };
  render() {
    const { restaurants, isLoading } = this.props;
    const filteredRestaurant = restaurants.filter((rest) => {
      return (
        rest.name.toLowerCase().includes(this.state.refine) ||
        rest.address.toLowerCase().includes(this.state.refine)
      );
    });

    return (
      <div data-test="cmp-restraunt-wrapper">
        <h1 className="title_header">
          <span aria-label="logo image" role="img">
            🍕
          </span>
          Restaurant Tracker
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            data-test="search-inp-cmp"
            labelText="City"
            inputVal={this.state.search}
            updateSearch={this.updateSearch}
            placeholder="Search for City: eg: toronto"
          />
          <button
            type="submit"
            data-test="search-btn"
            className="btn"
            disabled={!this.state.search.length}
            onClick={() => this.props.fetchData(this.state.search)}
          >
            Fetch data
          </button>
        </form>

        {restaurants.length > 0 && (
          <SearchList
            data-test="cmp-search-list"
            search={this.state.search}
            loading={isLoading}
            list={filteredRestaurant}
            nameFilter={this.state.refine}
            updateNameFilter={this.updateNameFilter}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurants,
    isLoading: state.restaurant.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchValue) => dispatch(fetchData(searchValue)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnConnectedRestaurant);
