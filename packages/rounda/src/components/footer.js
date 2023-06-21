import React, { useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../images/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const yellowSection = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      yellowSection.current, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        scrollTrigger: {
          trigger: yellowSection.current,
          start: "top bottom", // start the animation when the top of the footer hits the bottom of the viewport
          end: "bottom bottom", // end the animation when the bottom of the footer hits the bottom of the viewport
          scrub: true,
        },
      }
    );
  }, [data]);

  return (
    <Container ref={yellowSection}>
      <p
        css={css`
          transform: rotate(-180deg);
          writing-mode: vertical-rl;
          grid-column: 1/2;
          justify-self: start;
          margin: 0;
          font-family: "gangsterRegular";
          font-size: 50px;

          @media only screen and (max-width: 425px) {
            font-size: 12vw;
          }
        `}
      >
        Thank you for popping in.
      </p>
      <img src={logo} />
      <div>
        <p>say hi! to us on</p>
        <p><a href="mailto:mail@rounda.com">mail@rounda.com</a></p>
        <p><a href="https://www.instagram.com/studio.rounda/">instagram</a></p>
        <p><a href="https://www.facebook.com/studio.rounda">facebook</a></p>
        <p><a href="https://www.linkedin.com/company/rounda">linkedIn</a></p>
      </div>
    </Container>
  );
};

export default connect(Footer);

const Container = styled.footer`
  height: 100vh;
  background-color: #f7f7a8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: sticky;

  img {
    width: 40vw;
    height: auto;
    grid-column: 2/3;
  }

  div {
    grid-column: 3/4;
    text-align: right;
    padding-right: 50px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;

    p{
      margin:0;
    }

    p:nth-child(1){
      margin: revert;
    }

    a {
      position: static;
      text-decoration: none;
      color: black;
      mix-blend-mode: normal;
    }

    a:nth-of-type(1) {
      color: #4224d2;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    font-size: 4vw;

    p {
      grid-column: 1/2;
      justify-self: start;
      margin: 0;
      font-family: "gangsterRegular";
      font-size: 10vw;
    }

    img {
      width: 50vw;
      height: auto;
      grid-column: 2/3;
      grid-row: 1/2;
      margin-top: 50px;
    }

    div {
      grid-column: 2/3;
      grid-row: 2/3;
      text-align: right;
      padding-right: 50px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    font-size: 4vw;

    p {
      grid-column: 1/2;
      justify-self: center;
      margin: 0;
      font-family: "gangsterRegular";
      font-size: 10vw;
    }

    img {
      width: 70vw;
      height: auto;
      grid-column: 1/2;
      grid-row: 2/3;
      justify-self: center;
      margin-top: 50px;
    }

    div {
      grid-column: 1/2;
      grid-row: 3/4;
      text-align: center;
      padding-right: 0px;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
    }
  }
`;
