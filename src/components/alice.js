import React, { Component } from "react"
import { Link } from "gatsby"
import alice from "../images/alice3.png"
import h1 from "../images/h1.png"
import n1 from "../images/n1.png"
import bx3 from "../images/bx3.png"
import bx5 from "../images/bx5.png"
import h5 from "../images/h5.png"

class Barcelona extends Component {
  state = {
    pic: 1,
  }

  componentDidMount() {
    setInterval(
      function () {
        this.handleNextPhoto()
      }.bind(this),
      500
    )
  }

  handleNextPhoto() {
    this.setState({ pic: this.state.pic + 1 })
  }

  render() {
    let pic = 1

    if (this.state.pic == 1) {
      pic = alice
    } else if (this.state.pic == 2) {
      pic = h1
    } else if (this.state.pic == 3) {
      pic = bx3
    } else if (this.state.pic == 4) {
      pic = n1
    } else if (this.state.pic == 5) {
      pic = bx5
    } else if (this.state.pic == 6) {
      pic = h5
    } else if (this.state.pic == 7) {
      this.setState({ pic: 1 })
    }
    return (
      <div className="project-layout">
        <div className="project-layout__content">
          {" "}
          <div className="project-layout__img">
            <img src={pic} alt="" />
          </div>
          <p>
            Back in Paris, i worked in a digital agency, and then became a
            freelancer. I created a site for{" "}
            <b>
              <a href="https://alicethonnier.netlify.app/" target="blank">
                Alice Thonnier
              </a>
            </b>
            , a stylist & pattern maker, to show her brand and her different
            collections.
          </p>
          <div className="alicepics"> </div>
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

export default Barcelona
