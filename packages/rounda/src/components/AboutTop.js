import React, { useRef, useEffect } from "react";
import { connect, css, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  const topSection = useRef(null);

  const pinTheSection = () => {
    ScrollTrigger.create({
      trigger: [topSection.current],
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  };

  useEffect(() => {
    pinTheSection();
  }, []);

  return (
    <>
      <Container className="top" ref={topSection}>
        <div
          css={css`
            display: flex;
            flex-direction: row;

            @media only screen and (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <p
            css={css`
              margin-left: 5vw;
              margin-right: 10vw;
              width: 40%;

              @media only screen and (max-width: 768px) {
                width: 60%;
                margin-right: 0;
              }
            `}
          >
            {content.title_1}
          </p>
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              margin-right: 5vw;
              width: 100vw;
              height: 100vw;
              max-width: 440px;
              max-height: 446px;

              @media only screen and (max-width: 768px) {
                margin-right: 0;
                width: 80vw;
                align-self: center;
              }
            `}
          >
            <video autoPlay loop muted playsInline css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}>
  <source src={content.animation_1} type="video/mp4"/>
</video>
          </div>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: 640px;
            grid-template-rows: auto auto;
            margin-top: 20vh;
            margin-bottom: 20vh;
            margin-left: 5vw;

            @media only screen and (max-width: 768px) {
              margin-left: 0;
              grid-template-columns: 1fr;
            }
          `}
        >
          <p
            css={css`
              @media only screen and (max-width: 768px) {
                width: 70%;
                margin-left: 5vw;
              }
            `}
          >
            {content.title_2}
          </p>
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              width: 100%;
              height: 100vw;
              max-width: 640px;
              max-height: 346px;

              @media only screen and (max-width: 768px) {
                justify-self: center;
                max-width: 100%;
              }
            `}
          >
            <video autoPlay loop muted playsInline css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}>
  <source src={content.animation_2} type="video/mp4"/>
</video>
          </div>
        </div>
      </Container>
    </>
  );
};

export default connect(About);

const Container = styled.div``;
