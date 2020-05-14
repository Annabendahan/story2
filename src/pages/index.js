import React, { Component } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

class IndexPage extends Component {
  state = {
    count: 1,
    mount: true,
    show: true,
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({
          show: false,
        })
      }.bind(this),
      200
    )

    setTimeout(
      function () {
        this.setState({
          count: Math.floor(Math.random() * (30 - 10 + 1) + 10),
        })
      }.bind(this),
      600
    )
    setTimeout(
      function () {
        this.setState({
          count: Math.floor(Math.random() * (60 - 31 + 1) + 31),
        })
      }.bind(this),
      900
    )
    setTimeout(
      function () {
        this.setState({
          count: Math.floor(Math.random() * (95 - 61 + 1) + 61),
        })
      }.bind(this),
      1200
    )
    setTimeout(
      function () {
        this.setState({ count: 100 })
      }.bind(this),
      1400
    )
    setTimeout(
      function () {
        this.handleGo()
      }.bind(this),
      1700
    )
  }

  handleGo = () => {
    this.setState({ mount: false })
    setTimeout(
      function () {
        navigate("/story/")
      }.bind(this),
      1000
    )
  }

  render() {
    return (
      <div>
        {" "}
        <div
          className="landingg"
          style={{
            width: "100vw",
            height: "100vh",
            background: "black",
            zIndex: 9999,

            transform: this.state.mount
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <div
            className="hide"
            style={{
              width: "100vw",
              height: "100vh",
              background: "white",
              transform: this.state.show
                ? "translateY(0vh)"
                : "translateY(-100vh)",
              transition: "transform .4s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              top: "60vh",
              right: "20vw",
              fontSize: "5rem",
              color: "white",
              fontWeight: 100,
            }}
          >
            {this.state.count} %
          </p>
        </div>
      </div>
    )
  }
}

export default IndexPage
