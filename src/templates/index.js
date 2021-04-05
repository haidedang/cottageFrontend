import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/layout";
import ArticlesComponent from "../components/articles/articles";
import "../assets/css/main.css";
import Footer from "../components/layout/footer";
import Sidebar from "../components/layout/sidebar";

const IndexPage = ({data, pageContext}) => {
  console.log(data)
  console.log('pageContext', pageContext)
  //const data = useStaticQuery(query);
  // sort array and display latest articles on the first index
  // reverse order of array
 // data.allStrapiArticle.edges.reverse();

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div >
        <h1 className="pt-10 text-center text-3xl md:text-6xl" style={{color: "#456b45"}}>
          {data.strapiHomepage.hero.title}
        </h1>
        <div className=" md:mt-24 flex justify-center flex-wrap" style={{maxWidth:"1800px", margin:"auto"}}>
          <div className=" w-11/12 md:w-8/12 md:pb-24">
            <div className=" w-11/12 lg:w-10/12 mx-auto md:m-0">
              {/* <h1 className="text-3xl md:text-6xl">{data.strapiHomepage.hero.title}</h1> */}
              <ArticlesComponent articles={data.allStrapiArticle.edges} />
            </div>
          </div>
          <div className="w-11/12 pl-4 pr-4 md:ml-0 md:mr-0 md:w-4/12 lg:w-4/12 2xl:w-1/5 ">
            <Sidebar />
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($limit: Int!) {
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
    allStrapiArticle(filter: { status: { eq: "published" } }
    limit: $limit
    ) {
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
`;

export default IndexPage;
