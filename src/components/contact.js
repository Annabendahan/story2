import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

import nokia from "../images/nokia.png"

class Contact extends Component {
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <img className="nokia" src={nokia} alt="nokia" />
          <p>
            You have a project in mind? Contact me at{" "}
            <b>an.bendahan@gmail.com</b> or
            <b> 0659133919</b>; and follow me here{" "}
            <b>
              <a href="https://www.instagram.com/lebendan/" target="blank">
                @lebendan
              </a>
            </b>{" "}
            ;)
          </p>
        </div>
        <div className="line">
          {" "}
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

export default Contact
