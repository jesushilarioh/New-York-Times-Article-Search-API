import React, { Component } from "react";
import checkBoxes from "../functions/checkBoxes"

export default class Articles extends Component {

  render() {
    return (
      <div className="articles-div">
        {
          this.props.articles.map((article, id) => {
            return checkBoxes(article, id)
          })
        }
      </div>
    );
  }
}
