import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

class Studies extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <div> photo </div>
          <p>
            I studied business law in Paris Dauphine but realised that I wanted
            to work in a more <b>creative field.</b>{" "}
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

export default Studies
