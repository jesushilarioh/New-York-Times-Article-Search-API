import React from "react";

function determineBoxes(minNumber, maxNumber, articles) {
  return articles
    .filter(article => article.id > minNumber && article.id <= maxNumber)
    .map(box => (
      <div key={box.id} className={"box_" + box.id + " boxes"}>
        <h3>{box.title}</h3>
        <p>{box.body}</p>
      </div>
    ));
}
export default determineBoxes;
