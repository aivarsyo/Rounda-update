import React from "react";
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

  return (
    <>
      <Container className="black">
        <div
          css={css`
            align-self: flex-end;
            width: 50%;

            @media only screen and (max-width: 768px) {
              width: 70%;
            }
          `}
        >
          <p>{content.paragraph_1}</p>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: 440px;
            grid-template-rows: auto;
            margin-top: 10vw;
            color: #f7f7a8;
            font-family: "gangsterRegular";

            @media only screen and (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          <div
            css={css`
              pointer-events: none;
              overflow: hidden;
              width: 100%;
              height: 100vw;
              max-width: 440px;
              max-height: 585px;
            `}
          >
            <video autoPlay loop muted css={css`
                width: 100%;
                height: 100%;
                position: relative;
              `}>
  <source src={content.animation_3} type="video/mp4"/>
</video>
          </div>
          <p>{content.paragraph_2}</p>
        </div>
      </Container>
    </>
  );
};

export default connect(About);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vw 5vw 10vw 5vw;
  background-color: black;
  color: white;
  z-index: 1;
`;
