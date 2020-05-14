import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

import c from "../images/christines.png"

class Photography extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <img src={c} alt="" />
          <p>
            {" "}
            I also do <b>film photography</b> (film developping & traditionnal
            printing process)
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

export default Photography
