import React from "react";
import { graphql } from "gatsby";

const Blog = ({ data, pageContext }) => {
    console.log(data, pageContext)
    return (
        <div>
            hi
        </div>
    )
}

export const query = graphql`
    query ($limit: Int!) {
        allStrapiArticle(filter: { status: { eq: "published" } }
        limit: $limit) {
            edges {
              node {
                strapiId
                slug
                title
                publishedAt
                category {
                  name
                }
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                author {
                  name
                  picture {
                    childImageSharp {
                      fixed(width: 30, height: 30) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
    }
`



export default Blog