import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

import f1 from "../images/MHILSZ2.png"

class Football extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <img className="terrain" src={f1} alt="terrain" />
          <p>
            Apart from coding, I play football in paris 20{" "}
            <b>
              <a
                href="https://www.instagram.com/usparisxifeminine/"
                target="blank"
              >
                @usparisxifeminime
              </a>
            </b>
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

export default Football
