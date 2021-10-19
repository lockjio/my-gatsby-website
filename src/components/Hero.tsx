import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Atropos } from "atropos/react/atropos-react.esm"

import Contact from "./Contact"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      me: file(relativePath: { eq: "me.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
      <div className="marg-bot-1">
        <div
          className="card has-bg"
          data-atropos-offset="-4"
          style={{ backgroundImage: `url(${"../../images/home-backing.svg"})` }}
          id="hero"
        >
          <div className="flex-container no-flex-mobile">
            <div className="profile-picture-wrapper" data-atropos-offset="10">
              <picture>
                <source srcSet={`../../images/me.webp`} type="image/webp" />
                <Img
                  fluid={data.me.childImageSharp.fluid}
                  alt={"Jio Buenviaje"}
                  aria-label="Headshot"
                  className="profile-picture"
                />
              </picture>
            </div>
            <div className="flex top">
              <h1 className="name" data-atropos-offset="4">
                Hello 👋 I'm Jio Buenviaje
              </h1>
              <p data-atropos-offset="4">
                I'm a lifelong learner, driven developer, and proud Filipino. I
                aim to leverage tech to help people learn more and live better.
                I study computer science at{" "}
                <a
                  href="https://cse.nd.edu/undergraduate/computer-science-course-map/"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  University of Notre Dame,
                </a>{" "}
                and spend my free time{" "}
                <a
                  href="https://linkedin.com/in/saejhi"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  working at startups,
                </a>{" "}
                <a
                  href="https://github.com/saejhi"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  learning new things,
                </a>{" "}
                and{" "}
                <a
                  href="https://instagram.com/saejhi"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  dancing through life.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="buttons marg-bot-05">
          <a
            href={`../../files/resumeBuenviaje.pdf`}
            rel="noopener noreferrer"
            target="_BLANK"
            className="btn btn-info marg-bot-05"
          >
            View my resume
          </a>
          <Link to="#projects" className="btn btn-info marg-bot-05">
            View my projects
          </Link>
          <Contact linkClasses="btn btn-info" linkTitle="Contact me" button />
        </div>
      </div>
    </Atropos>
  )
}

export default Hero
