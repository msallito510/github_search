import React, { Component } from "react";
import Table from "./contentTable.js";
import "./search.css";

const STATUS = {
  ENABLE: true,
  DISABLE: false,
};

export default class filter extends Component {
  state = {
    search: "",
    isEnable: STATUS.DISABLE,
  };

  submitSearch = (e) => {
    this.setState({
      search: e.target.value,
      isEnable: STATUS.ENABLE,
    });
  };

  render() {
    const { search, isEnable } = this.state;
    const { data } = this.props;

    let dataFiltered = data.filter(
      (element) =>
        element.login.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );

    return (
      <div className="search-content">
        <div>
          <input
            className="input-search"
            type="text"
            name="search"
            placeholder="Search"
          ></input>
        </div>
        <div>
          <button
            className="search-button"
            id="search"
            name="search"
            value={search}
            onClick={this.submitSearch}
          >
            Search
          </button>
        </div>
        <Table dataResult={dataFiltered} isEnable={isEnable} />
      </div>
    );
  }
}
