import React, { Component } from "react"
import bcnb from "../images/bcn-billet.png"

class Barcelona extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <div className="project-layout__img">
            <img className="billet" src={bcnb} alt="terrain" />
          </div>
          <p>
            So I went to Barcelona to <b>learn to code</b> at Le Wagon, and I
            loved it!
          </p>
        </div>
        <div className="line">
          <svg
            width="200vw"
            height="1"
            viewBox="0 0 200vw 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L4267 0.999627" stroke="black" />
          </svg>
        </div>
      </div>
    )
  }
}

export default Barcelona
