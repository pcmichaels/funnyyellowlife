import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const description = data.site.siteMetadata?.description || `Description`

  return (
    <Layout location={location} title={siteTitle}>      
      <h3>{description}</h3>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">                        
            <StaticImage
              src="../images/FunnyYellowLife.png"
              width={300}
              quality={95}
              formats={["AUTO", "WEBP"]}
              alt="Funny Yellow Life"
              className="img-fluid"
            />

          </div>
        </div>
        <div className="row">
          <Link to="/about/" className="btn btn-primary my-2">About</Link>
          
          <Link to="/balloon/" className="btn btn-secondary my-2">
            <StaticImage
                src="../images/ArrowLeft.png"
                width={150}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Balloon Link"
                className="img-fluid"
                style={{ margin: "8px" }}
            />        
          </Link>        

          <Link to="/balloon/" className="btn btn-secondary my-2">
            <StaticImage
                src="../images/ArrowRight.png"
                width={150}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="Balloon Link"
                className="img-fluid"
                style={{ margin: "8px" }}
            />        
          </Link>        

        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`
