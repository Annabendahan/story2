import React, { Component } from "react"

import d2 from "../images/d2.png"

class Rentman extends Component {
  render() {
    return (
      <div className="project-layout disable-scrollbars ">
        <div className="project-layout__content">
          {" "}
          <img className="me" src={d2} alt="cc" />
          <p>
            Thus, i did an internship in digital marketing in Utrecht, at
            Rentman. <b> I liked the design part</b>, but wanted to go further.
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

export default Rentman
