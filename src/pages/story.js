import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Start from "../components/start"
import Presentation from "../components/presentation"
import Childhood from "../components/childhood"
import Studies from "../components/studies"
import Rentman from "../components/rentman"
import Barcelona from "../components/barcelona"
import Alice from "../components/alice"
import Work from "../components/work"
import Football from "../components/football"
import End from "../components/end"
import Photography from "../components/photography"
import Contact from "../components/contact"

class Story extends Component {
  state = {
    position: 0,
    projet: 1,
    mounted: false,
    nextProjet: 2,
    previousProjet: 0,
  }

  componentDidMount = () => {
    this.setState({ mounted: true })

    window.addEventListener("scroll", this.handleScroll)
    var element = document.getElementById("top")
    element.scrollIntoView()
    this.setState({ position: window.scrollY })
  }

  handleScroll = event => {
    console.log("the scroll things", event)
    console.log(window.scrollY)
    console.log(window.scrollY + this.state.position)

    setTimeout(
      function () {
        window.removeEventListener("scroll", this.handleScroll)
      }.bind(this),
      100
    )

    setTimeout(
      function () {
        console.log("timout")
        if (window.scrollY > this.state.position) {
          if (this.state.projet !== 12) {
            this.setState({
              projet: this.state.nextProjet,
            })
          }
        } else if (window.scrollY < this.state.position) {
          if (this.state.projet !== 1) {
            this.setState({ projet: this.state.previousProjet })
          }
        }
      }.bind(this),
      300
    )

    setTimeout(
      function () {
        var element = document.getElementById("top")
        element.scrollIntoView()
        this.setState({ position: window.scrollY })
        window.addEventListener("scroll", this.handleScroll)
        this.setState({
          nextProjet: this.state.projet + 1,
          previousProjet: this.state.projet - 1,
        })
      }.bind(this),
      1200
    )
  }

  render() {
    let classes1 = []

    if (this.state.projet > 1) classes1.push("passed")
    if (this.state.projet < 1) classes1.push("next")
    if (this.state.projet === 1) classes1.push("here")

    let classes1good = classes1.join(" ")

    let Compo1 = (
      <div className={classes1good}>
        {" "}
        <Start />
      </div>
    )

    let classes2 = []

    if (this.state.projet > 2) classes2.push("passed")
    if (this.state.projet < 2) classes2.push("next")
    if (this.state.projet === 2) classes2.push("here")

    let classes2good = classes2.join(" ")

    let Compo2 = (
      <div className={classes2good}>
        {" "}
        <Presentation />
      </div>
    )

    let classes3 = []

    if (this.state.projet > 3) classes3.push("passed")
    if (this.state.projet < 3) classes3.push("next")
    if (this.state.projet === 3) classes3.push("here")

    let classes3good = classes3.join(" ")

    let Compo3 = (
      <div className={classes3good}>
        {" "}
        <Childhood />
      </div>
    )

    let classes4 = []

    if (this.state.projet > 4) classes4.push("passed")
    if (this.state.projet < 4) classes4.push("next")
    if (this.state.projet === 4) classes4.push("here")

    let classes4good = classes4.join(" ")

    let Compo4 = (
      <div className={classes4good}>
        {" "}
        <Studies />
      </div>
    )

    let classes5 = []

    if (this.state.projet > 5) classes5.push("passed")
    if (this.state.projet < 5) classes5.push("next")
    if (this.state.projet === 5) classes5.push("here")

    let classes5good = classes5.join(" ")

    let Compo5 = (
      <div className={classes5good}>
        {" "}
        <Rentman />
      </div>
    )

    let classes6 = []

    if (this.state.projet > 6) classes6.push("passed")
    if (this.state.projet < 6) classes6.push("next")
    if (this.state.projet === 6) classes6.push("here")

    let classes6good = classes6.join(" ")

    let Compo6 = (
      <div className={classes6good}>
        {" "}
        <Barcelona />
      </div>
    )

    let classes7 = []

    if (this.state.projet > 7) classes7.push("passed")
    if (this.state.projet < 7) classes7.push("next")
    if (this.state.projet === 7) classes7.push("here")

    let classes7good = classes7.join(" ")

    let Compo7 = (
      <div className={classes7good}>
        {" "}
        <Alice />
      </div>
    )

    let classes8 = []

    if (this.state.projet > 8) classes8.push("passed")
    if (this.state.projet < 8) classes8.push("next")
    if (this.state.projet === 8) classes8.push("here")

    let classes8good = classes8.join(" ")

    let Compo8 = (
      <div className={classes8good}>
        {" "}
        <Work />
      </div>
    )

    let classes9 = []

    if (this.state.projet > 9) classes9.push("passed")
    if (this.state.projet < 9) classes9.push("next")
    if (this.state.projet === 9) classes9.push("here")

    let classes9good = classes9.join(" ")

    let Compo9 = (
      <div className={classes9good}>
        {" "}
        <Football />
      </div>
    )

    let classes10 = []

    if (this.state.projet > 10) classes10.push("passed")
    if (this.state.projet < 10) classes10.push("next")
    if (this.state.projet === 10) classes10.push("here")

    let classes10good = classes10.join(" ")

    let Compo10 = (
      <div className={classes10good}>
        {" "}
        <Photography />
      </div>
    )

    let classes11 = []

    if (this.state.projet > 11) classes11.push("passed")
    if (this.state.projet < 11) classes11.push("next")
    if (this.state.projet === 11) classes11.push("here")

    let classes11good = classes11.join(" ")

    let Compo11 = (
      <div className={classes11good}>
        {" "}
        <Contact />
      </div>
    )

    let classes12 = []

    if (this.state.projet > 12) classes12.push("passed")
    if (this.state.projet < 12) classes12.push("next")
    if (this.state.projet === 12) classes12.push("here")

    let classes12good = classes12.join(" ")

    let Compo12 = (
      <div className={classes12good}>
        {" "}
        <End />
      </div>
    )

    let title = "Start"
    if (this.state.projet === 1) {
      title = "Start"
    } else if (this.state.projet === 2) {
      title = "Presentation"
    } else if (this.state.projet === 3) {
      title = "Childhood"
    } else if (this.state.projet === 4) {
      title = "Studies"
    } else if (this.state.projet === 5) {
      title = "Netherlands"
    } else if (this.state.projet === 6) {
      title = "Barcelona"
    } else if (this.state.projet === 7) {
      title = "Alice"
    } else if (this.state.projet === 8) {
      title = "Work"
    } else if (this.state.projet === 9) {
      title = "Football"
    } else if (this.state.projet === 10) {
      title = "Photography"
    } else if (this.state.projet === 11) {
      title = "Contact"
    } else if (this.state.projet === 12) {
      title = "End"
    }
    return (
      <div>
        <SEO title="Story" />

        <div className="header">
          <p>
            <b className="name">Anna Bendahan </b>
          </p>{" "}
          <div className="pagecount">
            <p>
              <b>{title}</b>
            </p>{" "}
            <svg
              className="dash-thin"
              width="30"
              height="1"
              viewBox="0 0 30 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.18557e-08"
                y1="0.75"
                x2="30"
                y2="0.750002"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>{" "}
            <p>
              <span className="pagenum">{this.state.projet}</span> / 12{" "}
            </p>
          </div>
        </div>
        <div className="global" onScroll={event => this.handleScroll(event)}>
          <div id="top"> top </div>

          <div className="content">
            {" "}
            {Compo1}
            {Compo2}
            {Compo3}
            {Compo4}
            {Compo5}
            {Compo6}
            {Compo7}
            {Compo8}
            {Compo9}
            {Compo10}
            {Compo11}
            {Compo12}
          </div>
        </div>
      </div>
    )
  }
}

export default Story
