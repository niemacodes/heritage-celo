import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../App.css"
import { Container, Nav } from "react-bootstrap";
import landing1 from "../../assets/img/landing1.png"
import landing2 from "../../assets/img/landing2.png"
import landing3 from "../../assets/img/landing3.png"
import landing4 from "../../assets/img/landing4.png"
import landing5 from "../../assets/img/landing5.png"
import landing6 from "../../assets/img/landing6.png"
import landing7 from "../../assets/img/landing7.png"
import landing8 from "../../assets/img/landing8.png"
import landing9 from "../../assets/img/landing9.png"
import landing10 from "../../assets/img/landing10.png"
import landing11 from "../../assets/img/landing11.png"

const Cover = ({ name, coverImg, connect }) => {
  if (name) {
    return (
      <>
      <Container fluid="md">
          <Nav className="navbar navbar-light justify-content-between pt-3 pb-5">
            <Nav.Item className="flex-start" >
              <img
                height={40}
                width={150}
                alt="logo"
                src={coverImg}
              />
            </Nav.Item>
            <Nav.Item className="flex-end">
            <Button
              onClick={() => connect().catch((e) => console.log(e))}
              className="btn btn-s btn-primary bg-black px-3 mt-1"
              >
                Connect Wallet
            </Button>
            </Nav.Item>
          </Nav>
          <main>
            {/** Landing Page */}
            <div class="container py-5">
            <div class="row mb-4 align-items-center flex-lg-row-reverse">
              <div class="col-md-6 col-xl-7 mb-4 mb-lg-0 ">
                <div class="lc-block position-relative">
                  <img class="flex-end img-fluid rounded shadow mx-100" src={landing1} sizes="(max-width: 3000px) 100vw, 3000px" width="500" height="300" alt="Main"></img>
                </div>
              </div>
              <div class="col-md-6 col-xl-5">
                <div class="lc-block mb-3">
                  <div editable="rich">
                    <h1 class="fw-bolder display-2">Showcase your culture</h1>
                  </div>
                </div>
                <div class="mt-5 lc-block mb-4">
                  <div editable="rich">
                    <p class="lead">Benefiting indigenous communities by enabling them to take ownership of their art & culture. Perserving their culture, generating an income & keeping cultures alive!</p>
                  </div>
                </div>
                <div class="mt-5 lc-block">
                  <a class="btn btn-lg btn-primary bg-black" href="#_" role="button">
                    Join our Community!
                  </a>
                </div>
              </div>
            </div>
            </div>
            {/** */}  

        <p className="mt-10 text-secondary text-center">Built w/ Love by Nima, Tats, & Luk. ❤️ </p>
          </main>
        </Container>
      </>
    );
  }

  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
