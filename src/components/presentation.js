import React, { Component } from "react"
import mi from "../images/me.jpg"

class Presentation extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <img src={mi} alt="" />
          <p>
            {" "}
            Welcome to my website. I am anna bendahan, a freelance developer
            Based in paris. <b> I design & build websites.</b>
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

export default Presentation
