import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import {Seo} from "../../components/seo"

const comicBalloon = () => (
  <Layout>
    <div className="container text-center my-5">
      <h1>Balloon</h1>
      
      <StaticImage
            src="../images/comic-1-balloon/comic-hot-air-1.png"
            width={500}
            quality={80}
            formats={["AUTO", "WEBP"]}
            alt="Balloon Comic Strip"
            className="img-fluid"
          />

      <StaticImage
            src="../images/comic-1-balloon/comic-hot-air-2.png"
            width={500}
            quality={80}
            formats={["AUTO", "WEBP"]}
            alt="Balloon Comic Strip"
            className="img-fluid"
          />

      <StaticImage
            src="../images/comic-1-balloon/comic-hot-air-3.png"
            width={500}
            quality={80}
            formats={["AUTO", "WEBP"]}
            alt="Balloon Comic Strip"
            className="img-fluid"
          />

      <StaticImage
            src="../images/comic-1-balloon/comic-hot-air-4.png"
            width={500}
            quality={80}
            formats={["AUTO", "WEBP"]}
            alt="Balloon Comic Strip"
            className="img-fluid"
          />

    </div>
    <div className="container text-center my-5">
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default comicBalloon

export const Head = () => (
    <Seo title="Page two" />
)
