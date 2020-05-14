import React, { Component } from "react"

class Comp extends Component {
  state = {
    mounted: false,
  }
  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }
  render() {
    return (
      <div className="project-layout">
        {" "}
        <div className="project-layout__content">
          <div
            style={{
              left: this.state.mounted ? "30%" : "100%",
              transition: "left 1s cubic-bezier(0.72, 0, 0.28, 1)",
            }}
            className="linestart"
          >
            <h4>
              <b>Welcome,</b> <br />
              scroll to start
            </h4>
            <svg
              width="150vw"
              height="1"
              viewBox="0 0 150vw 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L4267 0.999627" stroke="black" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp
