import React, { Component } from "react";
import axios from "axios";
import Filter from "./filter.js";
import "./search.css";

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

export default class search extends Component {
  state = {
    data: [],
    status: STATUS.LOADING,
    error: undefined,
    isEnable: STATUS.NOTENABLE,
    filter: "",
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/search/users?q=tom")
      .then((response) => {
        this.setState({
          data: response.data.items,
          status: STATUS.LOADED,
          isEnable: STATUS.ENABLE,
        });
      })
      .catch(() => {
        this.setState({
          error: STATUS.ERROR,
          status: STATUS.ERROR,
        });
      });
  }

  handleFilter = (el) => {
    const response = this.state.data;
    this.setState({
      search: response.filter((element) => {
        element.login.toLowerCase().includes(el.toLowerCase());
      }),
    });
  };

  handleFilter = (el) => {
    this.setState({
      filter: el,
    });
  };

  render() {
    const { data, status, isEnable, filter } = this.state;

    return (
      <div>
        <Filter data={data} />
      </div>
    );
  }
}
