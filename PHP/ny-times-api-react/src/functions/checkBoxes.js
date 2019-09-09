import React from 'react'
import Article from "../component/Article"

export default function checkBoxes(article, id) {
  if (article.id === 1) {
    return (
      <div className="flex-rows">
        <div className={"box_" + article.id + " boxes"}>
          <Article article={article} />
        </div>
      </div>
    );
  } else if (article.id > 1 && article.id < 5) {
    return (
      <div key={id} className="flex-rows">
        <div className={"box_" + article.id + " boxes"}>
          <Article article={article} />
        </div>
      </div>
    );
  } else if (article.id === 5) {
    return (
      <div key={id} className="flex-rows">
        <div className={"box_" + article.id + " boxes"}>
          <Article article={article} />
        </div>
      </div>
    );
  } else if (article.id > 5 && article.id < 8) {
    return (
      <div key={id} className="flex-rows">
        <div className={"box_" + article.id + " boxes"}>
          <Article article={article} />
        </div>
      </div>
    );
  } else if (article.id > 7 && article.id < 11) {
    return (
      <div key={id} className="flex-rows">
        <div className={"box_" + article.id + " boxes"}>
          <Article article={article} />
        </div>
      </div>
    );
  }
}
