import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const article = this.props.article;

    return (
      <a key={article.id} href="#">
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <img src="" alt="" />
          <p className="article-date"></p>
        </div>
      </a>
    );
  }
}
