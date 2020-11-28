import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { USERNAME } from "../config/config";
import Helmet from "react-helmet";
const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
        </Helmet>
        <section>
          <div>
            <nav className="navbar navbar-light navbar-expand-md">
              <div className="container-fluid">
                <a
                  style={{
                    "font-family": "Lovers Quarrel",
                    "font-size": "34px",
                  }}
                  className="navbar-brand"
                  href="/"
                >
                  cottagecoredream
                </a>
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-2"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-2">
                  <ul className="nav navbar-nav mx-auto md:divide-x md:divide-grey-400  ">
                    <li className="nav-item  " role="presentation">
                      <a className="nav-link md:mr-10 p-0" href="/">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item " role="presentation">
                      <a
                        className="nav-link md:mr-10 md:ml-10 p-0"
                        href="/shoutout"
                      >
                        About Us
                      </a>
                    </li>
                    {/*  <li className="nav-item" role="presentation"><a className="nav-link" href="#">Shop</a></li> */}
                    <li className="nav-item " role="presentation">
                      <a className="nav-link md:ml-10 p-0" href="/freebies">
                        Freebies
                      </a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav m-0">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        href="https://www.instagram.com/cottagecoredream_/"
                      >
                        <i
                          style={{ fontSize: "30px" }}
                          className="fa fa-instagram"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>

      /* <div>
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">{data.strapiGlobal.siteName}</Link>
                  <Link to="/">The Cottage Dream</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                <Link to="/shoutout">Shoutouts</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <button
                className="uk-button uk-button-default uk-margin-right"
                type="button"
              >
                Categories
              </button>
              <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                <ul className="uk-nav uk-dropdown-nav">
                  {data.allStrapiCategory.edges.map((category, i) => (
                    <li key={`category__${category.node.slug}`}>
                      <Link to={`/category/${category.node.slug}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */
    )}
  />
);

export default Nav;
