import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const article = this.props.article;

    return (
      <div className="flex-rows">
        <div className={"box_1 boxes"}>
          <a href="#">
            <div>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
              <img src="" alt="" />
              <p className="article-date"></p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
