import React, { Component } from "react"
import { Link } from "gatsby"
import nokia from "../images/nokia.png"

class End extends Component {
  state = {
    mounted: false,
  }
  render() {
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <div className="lineend">
            <h4>
              <b>Thanks for visiting :)</b> <br />
              refresh to restart
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default End
