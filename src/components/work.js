import React, { Component } from "react"
import childhood from "../images/childhood.mp4"

class Work extends Component {
  state = {
    lines: 32783,
  }

  componentDidMount() {
    setInterval(
      function () {
        this.setState({ lines: this.state.lines + 1 })
      }.bind(this),
      1000
    )
  }

  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <div className="code-count">
            <h5> {this.state.lines}</h5>
            <h3>lines of code</h3>
          </div>{" "}
          <p>
            I worked on other projects too. I created a website for a lawyer,{" "}
            <b>
              <a href="http://www.qm-avocat.com/" target="blank">
                Quentin Mameri.
              </a>
            </b>{" "}
            <br />
            An other one for the{" "}
            <b>
              <a href="https://jeskieaveclasaf.fr/" target="blank">
                ski association
              </a>
            </b>{" "}
            of Air France. I also helped on Cargo & Wordpress websites.
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

export default Work
