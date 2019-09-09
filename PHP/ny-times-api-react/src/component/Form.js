import React, { Component } from "react";
import connection from "../functions/connection";

export default class Form extends Component {
  state = {
    search_term: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.results(connection(this.state.search_term));
    this.setState({ search_term: "" });
  };

  onChange = event => {
    this.setState({
      [event.target.name /* or search_term */]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group input-group-lg mb-3">
          <input
            className="form-control"
            type="text"
            id="search_term"
            placeholder="Search..."
            name="search_term"
            aria-label="search_term"
            aria-describedby="search_term"
            value={this.state.search_term}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button className="input-group-text" id="search_term" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
