import React, { Component } from "react";
import determineBoxes from "../functions/determineBoxes";

export default class Articles extends Component {
  render() {
    const articles = this.props.articles;

    return (
      <div className="article-div">
        <div className="flex-rows">{determineBoxes(0, 1, articles)}</div>
        <div className="flex-rows">{determineBoxes(1, 4, articles)}</div>
        <div className="flex-rows">{determineBoxes(4, 5, articles)}</div>
        <div className="flex-rows">{determineBoxes(5, 7, articles)}</div>
        <div className="flex-rows">{determineBoxes(7, 10, articles)}</div>
      </div>
    );
  }
}
