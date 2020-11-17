import React from "react";
import ShoutoutStyles from "./ShoutoutPage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import UploadButton from "../components/Shoutout/UploadButton";
import Feed from "../components/Shoutout/Feed";
import Layout from "../components/layout";
import { USERNAME } from "../config/config";

import "bootstrap/dist/css/bootstrap.min.css";
//import '../fonts/Caveat-Bold.ttf'

const ShoutoutPage = () => {
  return (
    <Layout>
      <div className={ShoutoutStyles.wrapper}>
        <div className={ShoutoutStyles.image}>
          <div className={ShoutoutStyles.container}>
            <div>
              <h1>Free Cottage Shoutouts</h1>
              <br></br>
            </div>
            <div>
              <p className={ShoutoutStyles.landingText}>
                Welcome to the Cottage Dream! Every week we will select some of
                your submitted pictures and share them on our Instagram Channel.
                Let’s build a cottagecore community together!
              </p>
            </div>
          </div>
        </div>

        <Container className={ShoutoutStyles.requirements}>
          <div className={[ShoutoutStyles.requirementsHeading].join(" ")}>
            <h2> - Photo Requirements - </h2>
          </div>

          <div
            className={[ShoutoutStyles.requirementWrapper, "mb-5", "mt-5"].join(
              " "
            )}
          >
            <Row xs={1} className={[ShoutoutStyles.requirementBody].join(" ")}>
              <Col className="col-md-4 text-center">
                <div
                  className={[
                    ShoutoutStyles.frameIcon,
                    ShoutoutStyles.icon,
                    "mt-3",
                    "mb-3",
                  ].join(" ")}
                ></div>
                <p> 9:16 or 4:5 format</p>
              </Col>

              <Col className="col-md-4 text-center">
                <div
                  className={[
                    ShoutoutStyles.photoIcon,
                    ShoutoutStyles.icon,
                    "mt-3",
                    "mb-3",
                  ].join(" ")}
                ></div>
                <p> should be your own picture</p>
              </Col>

              <Col className="col-md-4 text-center">
                <div
                  className={[
                    ShoutoutStyles.heartIcon,
                    ShoutoutStyles.icon,
                    "mt-3",
                    "mb-3",
                  ].join(" ")}
                ></div>
                <p> not edited and high resolution</p>
              </Col>
            </Row>
          </div>
        </Container>

        <UploadButton uploadButton={ShoutoutStyles.active} path="/upload" />

        <div className={[ShoutoutStyles.requirementsHeading].join(" ")}>
          <h2> Follow us on Instagram :)</h2>
        </div>

        <div className={ShoutoutStyles.feed}>
          <Feed
            userName={USERNAME}
            className="Feed"
            classNameLoading="Loading"
          />
        </div>

        <div id="about" className={ShoutoutStyles.about}>
          <Container className="mt-5">
            <Row>
              <Col
                className={[ShoutoutStyles.aboutText, "col-md-12 my-auto"].join(
                  " "
                )}
              >
                <h1 className="mt-3 text-center">About Us</h1>

                <p>
                  The Cottage Dream is a lifestyle movement inspired by the
                  ideas of simplicity, slow travel, sustainability and harmony
                  with nature. Our mission is to build an inclusive cottagecore
                  community by offering an aspirational place of soft escapism
                  with a hint of nostalgia to make everyone feel warm, fuzzy and
                  welcomed.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default ShoutoutPage;
