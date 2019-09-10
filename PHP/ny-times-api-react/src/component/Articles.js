import React, { Component } from "react";
import Article from "../component/Article";

export default class Articles extends Component {
  render() {
    const articles = this.props.articles;

    return (
      <div className="articles-div">
        {articles.map((article, id) => (
            <Article article = { article } key = { id } />
        ))}
      </div>
    );
  }
}
