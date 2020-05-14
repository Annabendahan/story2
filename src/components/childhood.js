import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

class Childhood extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <p> I grew up in France and (looks like) childhood was nice !</p>
          <video muted autoPlay loop playsInline>
            <source src={childhood} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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

export default Childhood
