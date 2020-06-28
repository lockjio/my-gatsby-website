import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Content from "../components/Content"
import Hero from "../components/Hero"
import Button from "../components/Button"
import Section from "../components/Section"
import Card from "../components/Card"
import Tech from "../components/Tech"
import Project from "../components/Project"
import Browser from "../components/Browser"
import Mobile from "../components/Mobile"
import System from "../components/System"
import Action from "../components/Action"

import "../styles/index.scss"
import "../styles/responsive.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Home {
      nd: file(relativePath: { eq: "education/nd.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pshs: file(relativePath: { eq: "education/pshs.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      techstars: file(relativePath: { eq: "experience/techstars.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ideacenter: file(
        relativePath: { eq: "extracurriculars/ideacenter.png" }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cbs: file(relativePath: { eq: "experience/cbs.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      delive: file(relativePath: { eq: "experience/delive.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      debtly: file(relativePath: { eq: "experience/debtly.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gitta: file(relativePath: { eq: "experience/gitta.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tembo: file(relativePath: { eq: "experience/tembo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gashawk: file(relativePath: { eq: "experience/gashawk.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      foreager: file(relativePath: { eq: "experience/foreager.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      muntiSm: file(relativePath: { eq: "experience/muntiSm.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      munti: file(relativePath: { eq: "projects/munti.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      debtlySite: file(relativePath: { eq: "projects/debtly.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jio: file(relativePath: { eq: "projects/jio.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      drone: file(relativePath: { eq: "projects/drone.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      overwatch: file(relativePath: { eq: "projects/overwatch.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logger: file(relativePath: { eq: "projects/logger.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      charger: file(relativePath: { eq: "projects/charger.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cosmo: file(relativePath: { eq: "projects/cosmo.png" }) {
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
    <Layout>
      {/* App content */}
      <Content>
        {/* Overview */}
        <Hero />
        {/* Education */}
        <Section id="education" title="Education">
          <Card
            title="University of Notre Dame"
            subtitle="2018 – 2022 | 3.51 GPA"
            logoLink="https://cse.nd.edu/undergraduates/computer-science"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
            logoAlt={"ND logo"}
            body={
              <p>
                Pursuing a BS in Computer Science (
                <a
                  href="https://cse.nd.edu/undergraduates/cse-concentrations/mobile-computing"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Concentration in Mobile Computing
                </a>
                ) from the College of Engineering with a Minor in{" "}
                <a
                  href="https://mendoza.nd.edu/undergraduate/innovation-entrepreneurship-minor"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  Innovation & Entrepreneurship
                </a>{" "}
                from the Mendoza College of Business.
              </p>
            }
            end={
              <p>
                <strong>Relevant Courses</strong>: Data Structures, Modern Web &
                App Development, Software Development Practices, Programming
                Paradigms, Systems Programming, Computer Architecture, Logic
                Design
              </p>
            }
          />
          <Card
            title="Philippine Science High School – Main Campus"
            subtitle="2012 – 2018 | 3.84 GPA"
            logoLink="http://pshs.edu.ph/curriculum/"
            logo={`../../images/education/pshs.webp`}
            logoBackup={data.pshs.childImageSharp.fluid}
            logoAlt={"PSHS logo"}
            body={
              <p>
                Graduated Magna Cum Laude (High Honors), with a class rank of
                28/221 and{" "}
                <a
                  href="http://sei.dost.gov.ph/index.php/programs-and-projects/scholarships/undergraduate-scholarships#s-amp-t-undergraduate-scholarships"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  2018 Philippine Government DOST-SEI Merit Scholarship
                </a>{" "}
                awardee. Varsity Debate Team Captain, Philippine National
                Fencing Team Member, and Outreach Committee Founder.
              </p>
            }
            end={
              <p>
                <strong>Relevant Courses</strong>: Data Structures & Algorithms,
                Object-Oriented Programming, Client-Side Web Development,
                Embedded Systems & Program Design, STEM Research
              </p>
            }
          />
        </Section>
        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          button={
            <a
              href={`../../files/resumeBuenviaje.pdf`}
              className="btn btn-info"
              rel="noopener noreferrer"
              target="_BLANK"
            >
              View my resume →
            </a>
          }
        >
          <Card
            title="Fullstack Software Engineer Intern | Techstars"
            subtitle="Summer 2020 • New York, NY"
            logoLink="https://techstars.com/"
            logo={`../../images/experience/techstars.webp`}
            logoBackup={data.techstars.childImageSharp.fluid}
            logoAlt={"Techstars logo"}
            body={
              <ul className="tech">
                <li>
                  Will work with portfolio company{" "}
                  <a
                    href="https://www.joincabinet.com/"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Cabinet
                  </a>{" "}
                  on features for web and Hybrid mobile apps currently serving
                  2,000+ executive assistants at Fortune 500 and Fortune 100
                  companies
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: TypeScript, JavaScript, React,
                Redux, Python, Django, PostgreSQL, Jest, Postman, AWS (S3, RDS,
                Cognito, Elastic Beanstalk, Route53, CloudFront), Docker,
                Material-UI, Ionic, Capacitor, Adobe XD, Zeplin, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Fullstack Software Engineer Intern | IDEA Center"
            subtitle="Winter / Spring 2020 • South Bend, IN"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={data.ideacenter.childImageSharp.fluid}
            logoAlt={"IDEA Center logo"}
            body={
              <ul className="tech">
                <li>
                  Developed e-Commerce web app and store templates through Pair
                  Programming to used by startups
                </li>
                <li>
                  Developed metrics cards and dashboards in Snapboard currently
                  used for administrative monitoring
                </li>
                <li>
                  Created Design Documents and Codebase Guides/Documentation for
                  all work done in Agile Team
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: JavaScript, React, Next, GraphQL,
                Apollo, MongoDB, Parse Platform, Node, Express, Shopify API,
                Sass/SCSS, HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Media Software Engineer Intern | CBS"
            subtitle="Summer 2019 • New York, NY"
            logoLink="https://cbs.com"
            logo={`../../images/experience/cbs.webp`}
            logoBackup={data.cbs.childImageSharp.fluid}
            logoAlt={"CBS logo"}
            body={
              <ul className="tech">
                <li>
                  Standardized end-to-end broadcast distribution configurations
                  (Codecs) for entire East Coast feed
                </li>
                <li>
                  Completed 27 international purchase requests using Database
                  Queries totaling $132,930 in profit
                </li>
                <li>
                  Assisted in Cloud-based content compute, storage and
                  monitoring for day-to-day operations
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: C++, XML, SQL, SQL Server, AWS
                (EC2, S3, Lambda, Glacier, CloudWatch), AutoCAD
              </p>
            }
          />
          <Card
            title="Chief Technology Officer | DeLive Drones"
            subtitle="October 2019 – Present • South Bend, IN"
            logoLink="https://delivedrones.com"
            logo={`../../images/experience/delive.webp`}
            logoBackup={data.delive.childImageSharp.fluid}
            logoAlt={"DeLive logo"}
            body={
              <ul className="tech">
                <li>
                  Developed Frontend dashboard web app and drone communication
                  RESTful API in Agile Team
                </li>
                <li>
                  Exhibited in{" "}
                  <a
                    href="https://ces.tech"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Consumer Electronics Show (CES) 2020
                  </a>
                  , secured $25k funding,{" "}
                  <a
                    href="https://ideacenter.nd.edu/news-events/news/this-summers-race-to-revenue-program-funds-five-student-run-startups"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Race to Revenue
                  </a>{" "}
                  accelerator invitation, and pitch to Indianapolis-based $100M
                  VC fund
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: JavaScript, React, Node, Express,
                Python, Raspberry Pi, AWS IoT, DroneKit SDK, Sass/SCSS,
                Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Fullstack | Debtly"
            subtitle="May 2020 – Present • South Bend, IN"
            logoLink="https://debtly.app/"
            logo={`../../images/experience/debtly.webp`}
            logoBackup={data.debtly.childImageSharp.fluid}
            logoAlt={"Debtly logo"}
            body={
              <ul className="tech">
                <li>
                  Will solely develop Native iOS fintech mobile app, NoSQL User
                  Database, and static website
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: Swift, SwiftUI, Cocoapods, iOS SDK,
                Xcode, Sketch, Adobe XD, Zeplin, Webflow, Firebase, TestFlight,
                HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Fullstack | Gitta"
            subtitle="April 2020 – Present • South Bend, IN"
            logoLink="https://www.gittasitta.com/"
            logo={`../../images/experience/gitta.webp`}
            logoBackup={data.gitta.childImageSharp.fluid}
            logoAlt={"Gitta logo"}
            body={
              <ul className="tech">
                <li>
                  Developed babysitter hiring service Hybrid mobile app, RESTful
                  API, SMS autoresponder and NoSQL Database in Agile Team
                </li>
                <li>
                  Will beta test iOS and Android apps through Apple TestFlight
                  and Google Play Console for upcoming release
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: Dart, Flutter, JavaScript, Node,
                Express, Firebase, Twilio API, Twilio Studio, Twilio Functions,
                Adobe XD, Supernova Studio, Wiredash, TestFlight, Play Console,
                HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Fullstack | Tembo AI"
            subtitle="January 2019 – January 2020 • South Bend, IN"
            logoLink="https://tembo.ai"
            logo={`../../images/experience/tembo.webp`}
            logoBackup={data.tembo.childImageSharp.fluid}
            logoAlt={"Tembo logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed Fullstack SSR web app and emergency group
                  messaging Hybrid mobile app to be used in alpha testing
                </li>
                <li>
                  Solely developed indoor location triangulation WiFi mobile
                  tracker resulting in{" "}
                  <a
                    href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    $11.5k funding
                  </a>
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: Dart, Flutter, JavaScript, React,
                Next, Node, Express, Python, Raspberry Pi, Vercel (ZEIT Now),
                Heroku, Firebase, Kali Linux, Mapbox API, Sass/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Frontend, Embedded | Gäshawk"
            subtitle="January 2019 – January 2020 • South Bend, IN"
            logoLink="https://gashawkrv.com/"
            logo={`../../images/experience/gashawk.webp`}
            logoBackup={data.gashawk.childImageSharp.fluid}
            logoAlt={"Gäshawk logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed Server-Side Rendering (SSR) Progressive Web
                  App (PWA) currently used by startup
                </li>
                <li>
                  Solely developed LiDAR collision detection system and
                  Touchscreen Graphical User Interface (GUI) resulting in{" "}
                  <a
                    href="https://startupsouthbendelkhart.com"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    Start-Up South Bend Elkhart (SUSBE)
                  </a>{" "}
                  accelerator invitation
                </li>
                <li>
                  Assisted in{" "}
                  <a
                    href="https://seedfund.nsf.gov/about"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    National Seed Fund (NSF) Small Business Innovation Research
                    (SBIR)
                  </a>{" "}
                  program entry
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: C++, Arduino, JavaScript, React,
                Gatsby, GraphQL, Netlify, Google Maps API, Sass/SCSS, Bootstrap,
                HTML/CSS, PWA, Git
              </p>
            }
          />
          <Card
            title="Software Engineer – Mobile, Frontend | Foreager"
            subtitle="January – August 2019 • Townsend, MA"
            logoLink="/"
            logo={`../../images/experience/foreager.webp`}
            logoBackup={data.foreager.childImageSharp.fluid}
            logoAlt={"Foreager logo"}
            body={
              <ul className="tech">
                <li>
                  Solely developed peer-to-peer golf rental Hybrid mobile app
                  resulting in semifinals finish (top 30/175 teams) in{" "}
                  <a
                    href="https://mccloskey.ideacenter.nd.edu"
                    rel="noopener noreferrer"
                    target="_BLANK"
                  >
                    McCloskey New Venture Competition 2019
                  </a>
                </li>
                <li>
                  Assisted in developing Frontend of prototype e-Commerce
                  website
                </li>
              </ul>
            }
            end={
              <p>
                <strong>Tech Stack</strong>: Dart, Flutter, Firebase, Heroku,
                JavaScript, jQuery, Mailchimp API, Sass/SCSS, Bootstrap,
                HTML/CSS, Git
              </p>
            }
          />
          <Card
            title="Founder, Lead Developer & Designer, Project Manager | Munti"
            subtitle="February 2019 – Present • South Bend, IN"
            logoLink="https://munti.io/"
            logo={`../../images/experience/muntiSm.webp`}
            logoBackup={data.muntiSm.childImageSharp.fluid}
            logoAlt={"Munti logo"}
            body={
              <ul className="tech">
                <li>
                  Led web, mobile and hardware development teams of Software
                  Freelance Company through multiple concurrent projects
                </li>
                <li>
                  Built web, mobile apps and embedded systems for early-stage
                  startups and small businesses
                </li>
                <li>
                  Secured $2.5k funding to develop Fullstack web and Native
                  mobile apps for student startup recruitment
                </li>
              </ul>
            }
          />
        </Section>
        {/* Technologies */}
        <Section
          id="technologies"
          title="Technologies"
          button={
            <Link to="#projects" className="btn btn-info">
              View my projects →
            </Link>
          }
        >
          <Tech />
        </Section>
        {/* Extracurriculars */}
        <Section id="extracurriculars" title="Extracurriculars">
          <Card
            title="Student Ambassador | IDEA Center"
            subtitle="August 2019 – Present"
            logoLink="https://ideacenter.nd.edu"
            logo={`../../images/extracurriculars/ideacenter.webp`}
            logoBackup={data.ideacenter.childImageSharp.fluid}
            logoAlt={"IDEA Center logo"}
            body={
              <p>
                Standing for Innovation, De-Risking and Enterprise Acceleration,
                the{" "}
                <a
                  href="https://ideacenter.nd.edu"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  IDEA Center
                </a>{" "}
                is the fundamental resource for all commercialization and
                entrepreneurial activities at the University of Notre Dame.
              </p>
            }
            end={
              <ul>
                <li>
                  Aided in recruiting students for summer internships, McCloskey
                  New Venture Competition, and academic programs
                </li>
                <li>
                  Connected College of Engineering students to affiliated local
                  startups and business plan teams
                </li>
                <li>
                  Researched on marketing and recruitment strategies for College
                  of Engineering students
                </li>
              </ul>
            }
          />
          <Card
            title="Teaching Assistant, PHIL 10111 Intro to Philosophy | University of Notre Dame"
            subtitle="August 2019 – Present"
            logoLink="https://godandgoodlife.nd.edu"
            logo={`../../images/education/nd.webp`}
            logoBackup={data.nd.childImageSharp.fluid}
            logoAlt={"ND logo"}
            body={
              <p>
                The{" "}
                <a
                  href="https://godandgoodlife.nd.edu"
                  rel="noopener noreferrer"
                  target="_BLANK"
                >
                  God and the Good Life (GGL)
                </a>{" "}
                course tackles such issues as what justifies one's beliefs,
                whether one should practice a religion, and what sacrifices one
                should make for others.
              </p>
            }
            end={
              <ul>
                <li>
                  Oversaw 21 students through graded group discussions and major
                  requirements of 3-credit course (20-page essay and
                  university-wide campaign publication)
                </li>
                <li>
                  Aided in course restructuring, lesson planning, grading
                  assignments, and hosting office hours
                </li>
              </ul>
            }
          />
        </Section>
        {/* Projects */}
        <Section id="projects" title="Projects">
          <Project
            bgColor={1}
            title="Munti Site"
            body="Design and development freelance company server-side rendering (SSR) landing page (PWA) for Munti LLC."
            end={
              <p>
                <strong>Tech Stack:</strong> JavaScript, React (CRA), Jest,
                Sass, Bootstrap, Netlify, Basin, Google Analytics, HTML/CSS,
                PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://munti.io/"
                  title="View here"
                  links="https://github.com/munti-llc/munti-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image={`../../images/projects/munti.webp`}
              imageBackup={data.munti.childImageSharp.fluid}
              imageAlt={"Munti site"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Gäshawk Site"
            body="Startup company server-side rendering (SSR) landing page (PWA) for Gäshawk Incorporated."
            end={
              <p>
                <strong>Tech Stack:</strong> JavaScript, React, Gatsby, GraphQL,
                Sass, Bootstrap, Netlify, Google Maps, Formcarry, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://gashawkrv.com/"
                  title="View here"
                  links="https://github.com/gashawk/gashawk-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/gashawkSite.webm`}
              vidBackup={`../../videos/gashawkSite.mp4`}
              vidAlt={"Gäshawk site"}
            />
          </Project>
          <Project
            bgColor={2}
            title="DeLive Site"
            body="Startup company landing page (PWA) for DeLive Aerial System, LLC to be connected to Node + Express backend through Next for SSR."
            end={
              <p>
                <strong>Tech Stack:</strong> JavaScript, React (CRA), Sass,
                Bootstrap, Netlify, Google Maps, Mailchimp, EmailJS, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://delivedrones.com/"
                  title="View here"
                  links="https://github.com/delive-as/delive-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/deliveSite.webm`}
              vidBackup={`../../videos/deliveSite.mp4`}
              vidAlt={"DeLive site"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Tembo Site"
            body="Startup company landing page (PWA) for Tembo AI, LLC set up for heavier SSR fullstack web app workload."
            end={
              <p>
                <strong>Tech Stack:</strong> JavaScript, React, Next, Node,
                Express, Sass, Bootstrap, Now, Mapbox, Mailchimp, Formspree,
                Google Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://tembo.ai/"
                  title="View here"
                  links="https://github.com/tembo-ai/tembo-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/temboSite.webm`}
              vidBackup={`../../videos/temboSite.mp4`}
              vidAlt={"Tembo site"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Kyra Site"
            body="Portfolio website (PWA) for fashion designer Kyra Buenviaje displaying resume, projects and collections."
            end={
              <p>
                <strong>Tech Stack:</strong> JavaScript, React, Gatsby, GraphQL,
                styled-components, Tailwind, Netlify, Formspree, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button
                  link="https://kyrabuenviaje.com/"
                  title="View here"
                  links="https://github.com/lockjio/kyra-site"
                  titles="View repo"
                />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/kyraSite2nd.webm`}
              vidBackup={`../../videos/kyraSite2nd.mp4`}
              vidAlt={"Kyra site"}
            />
          </Project>
          <Project
            bgColor={2}
            title="Gitta Site"
            body="Startup company landing page (PWA) for Gitta LLC and the GittaSitta mobile app."
            end={
              <p>
                <strong>Tech Stack:</strong> Squarespace, Adobe XD, Zeplin,
                Google Analytics, Bootstrap, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <div className="buttons">
                <Button link="https://www.gittasitta.com/" title="View here" />
              </div>
            }
          >
            <Browser
              image=""
              vid={`../../videos/gittaSite.webm`}
              vidBackup={`../../videos/gittaSite.mp4`}
              vidAlt={"Gitta site"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Debtly Site"
            body="Startup company landing page (PWA) for Debtly Inc. and the Debtly mobile app."
            end={
              <p>
                <strong>Tech Stack:</strong> Webflow, Sketch, Adobe XD, Zeplin,
                Google Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <Button link="https://www.debtly.app/" title="View here" />
            }
          >
            <Browser
              image={`../../images/projects/debtly.webp`}
              imageBackup={data.debtlySite.childImageSharp.fluid}
              imageAlt={"Debtly site"}
            />
          </Project>
          <Project
            bgColor={3}
            title={
              <a href="https://jbuenviaje.com">
                <h2>./Recursion</h2>
              </a>
            }
            body="Personal website (PWA) displaying resume and projects inspired by a simple, software project-friendly LinkedIn profile."
            end={
              <p>
                <strong>Tech Stack:</strong> TypeScript, JavaScript, React,
                Gatsby, GraphQL, Sass, Bootstrap, Netlify, Getform, Google
                Analytics, HTML/CSS, PWA, Git
              </p>
            }
            buttons={
              <Button
                link="https://github.com/lockjio/my-site"
                title="View repo"
              />
            }
          >
            <Browser
              image={`../../images/projects/jio.webp`}
              imageBackup={data.jio.childImageSharp.fluid}
              imageAlt={"My site"}
            />
          </Project>
          <Project
            bgColor={2}
            title="GittaSitta App"
            body="Babysitter Hiring Service iOS/Android Hybrid App with Authentication, SMS Autoresponder, Contact and Calendar Integration developed for Gitta LLC. Will beta test through TestFlight/Play Console for release."
            end={
              <p>
                <strong>Tech Stack:</strong> Dart, Flutter, Provider,
                JavaScript, Firebase, Twilio, Adobe XD, Supernova Studio,
                Wiredash
              </p>
            }
          >
            <Mobile
              vid={`../../videos/gitta.webm`}
              vidAlt={"GittaSitta app webm"}
              vidBackup={`../../videos/gitta.mp4`}
              vidBackupAlt={"GittaSitta app mp4"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Tembo App"
            body="Emergency Messaging iOS/Android Hybrid App with Authentication developed for Tembo AI, LLC. Will be integrated with user tracking feature and used for alpha testing in local high school."
            end={
              <p>
                <strong>Tech Stack:</strong> Dart, Flutter, Provider, Firebase
              </p>
            }
          >
            <Mobile
              vid={`../../videos/tembo.webm`}
              vidAlt={"Tembo app webm"}
              vidBackup={`../../videos/tembo.mp4`}
              vidBackupAlt={"Tembo app mp4"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Foreager App"
            body="Peer-to-Peer Golf Equipment Rental iOS/Android Hybrid App developed for Foreager, LLC. Demo resulted in Semifinals finish (top 30/175 teams) in McCloskey New Venture Competition 2019."
            end={
              <p>
                <strong>Tech Stack:</strong> Dart, Flutter, Firebase
              </p>
            }
          >
            <Mobile
              vid={`../../videos/foreager.webm`}
              vidAlt={"Foreager app webm"}
              vidBackup={`../../videos/foreager.mp4`}
              vidBackupAlt={"Foreager app mp4"}
            />
          </Project>
          <Project
            bgColor={2}
            title="DeLive Drone"
            body="Semi-Autonomous Drone with Automatic Ticketing and Communication System developed for DeLive Aerial System, LLC. Demo resulted in 15k seed funding from Race to Revenue (R2R) accelerator program."
            end={
              <p>
                <strong>Tech Stack:</strong> Python, Raspberry Pi, Django, Node,
                Express, AWS IoT, DroneKit SDK, Git
              </p>
            }
          >
            <System
              image={`../../images/projects/drone.webp`}
              imageBackup={data.drone.childImageSharp.fluid}
              imageAlt={"DeLive embedded"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Gäshawk Overwatch"
            body="LiDAR Overhead Collision Detection System with Touchscreen Graphical User Interface (GUI) developed for Gäshawk Inc. Demo resulted in Start-Up South Bend Elkhart (SUSBE) accelerator invite."
            end={
              <p>
                <strong>Tech Stack:</strong> C++, Arduino, Git
              </p>
            }
            buttons={
              <Button
                link="https://github.com/gashawk/overwatch"
                title="View repo"
              />
            }
          >
            <System
              image={`../../images/projects/overwatch.webp`}
              imageBackup={data.overwatch.childImageSharp.fluid}
              imageAlt={"Gäshawk embedded"}
            />
          </Project>
          <Project
            bgColor={3}
            title="Automated School Logger"
            body="RFID attendance and location logger with online school database for Research 2 & 3. Garnered 3rd Grand Award in 2017 Youth Math Science and Technology (YMSAT) Week."
            end={
              <p>
                <strong>Tech Stack:</strong> C++, Arduino, PHP, MySQL,
                CodeIgniter, Eagle, Fritzing
              </p>
            }
            buttons={
              <Button
                link={`../../files/researchLogger.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/logger.webp`}
              imageBackup={data.logger.childImageSharp.fluid}
              imageAlt={"Logger research"}
            />
          </Project>
          <Project
            bgColor={2}
            title="Sustainable Energy Charger"
            body="Mobile phone solar panel and hand-crank charger for Research 1. Garnered 4th Grand Award in Engineering in 2017 Taiwan International Science Fair (TISF)."
            end={
              <p>
                <strong>Tech Stack:</strong> AutoCAD, Switch-Mode Converter,
                Eagle, Fritzing
              </p>
            }
            buttons={
              <Button
                link={`../../files/researchCharger.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/charger.webp`}
              imageBackup={data.charger.childImageSharp.fluid}
              imageAlt={"Charger research"}
            />
          </Project>
          <Project
            bgColor={1}
            title="Cosmological Constant"
            body="Research done for Theoretical Physics department of University of the Philippines in summer 2017 internship. Garnered Honorable Mention Award."
            buttons={
              <Button
                link={`../../files/researchNeutron.pdf`}
                title="View research"
              />
            }
          >
            <System
              image={`../../images/projects/cosmo.webp`}
              imageBackup={data.cosmo.childImageSharp.fluid}
              imageAlt={"Cosmo research"}
            />
          </Project>
        </Section>
        <div className="space-mobile" />
        <Action />
      </Content>
    </Layout>
  )
}

export default IndexPage
