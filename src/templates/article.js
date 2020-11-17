import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Moment from "react-moment";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import articleStyles from "./articleStyles.module.css";
import BackgroundImage from "gatsby-background-image";
import { SERVER_URL } from "../config/config";
import TalkyardCommentsIframe from "@debiki/gatsby-plugin-talkyard";
import Comments from "../components/Comments";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }, status: { eq: "published" }) {
      strapiId
      title
      description
      content
      slug
      publishedAt
      image {
        publicURL
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
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
`;

const Article = ({ data }) => {
  let article = {
    title: " ",
    image: {
      publicURL: " ",
      childImageSharp: {
        fluid: {},
      },
    },
    content: " ",
    author: {
      picture: {
        childImageSharp: {
          fixed: " ",
        },
      },
      name: " ",
    },
    published_at: " ",
  };
  let seo = {};
  if (data.strapiArticle !== null) {
    article = data.strapiArticle;
    seo = {
      metaTitle: article.title,
      metaDescription: article.description,
      shareImage: article.image,
      article: true,
    };
  }

  return (
    <Layout seo={seo}>
      <div>
        <BackgroundImage
          id="banner"
          className={[
            articleStyles.bannerImage,
            "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
          ].join(" ")}
          fluid={article.image.childImageSharp.fluid}
          /* data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img */
        >
          <div className={articleStyles.captionHeader}>
            <h1 className={articleStyles.bannerCaption}>{article.title}</h1>
          </div>
        </BackgroundImage>

        <div className={[articleStyles.articleSection, "uk-section"].join(" ")}>
          <div className="uk-container uk-container-small">
            <Markdown
              className={articleStyles.content}
              source={article.content}
              escapeHtml={false}
            />

            <hr className="uk-divider-small" />

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.author.picture && (
                  <Img
                    fixed={article.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={articleStyles.commentSection}>
        {/*  <TalkyardCommentsIframe /> */}
        <Comments slug={article.slug} />
      </div>
    </Layout>
  );
};

export default Article;
