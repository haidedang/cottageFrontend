import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/articles";
import "../assets/css/main.css";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const IndexPage = () => {
  const data = useStaticQuery(query);
  // sort array and display latest articles on the first index
  // reverse order of array 
  data.allStrapiArticle.edges.reverse()

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className=" md:pt-24 md:pb-24">
        <div className=" w-11/12 lg:w-10/12 m-auto">
          <h1 className="text-3xl md:text-6xl">{data.strapiHomepage.hero.title}</h1>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
      <div className="w-11/12 m-auto">
      <Sidebar />
      </div>
      
      <Footer />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
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
`;

export default IndexPage;
