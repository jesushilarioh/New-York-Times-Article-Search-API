import React from 'react'
import attributionImg from "../images/attributionImg.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box-1">
        <a href="https://developer.nytimes.com" rel="noopener noreferrer" target="_blank" className="powered-by-img">
          <img src={attributionImg} alt="Powered By The New York Times" />
        </a>
      </div>
      <div className="footer-box-2">
        <p className="footer-para-1">Produced by
          <a href="https://jesushilarioh.com" rel="noopener noreferrer" target="_blank"> Jesús Hilario H</a>.
        </p>
      </div>
    </div>
  )
}

export default Footer
