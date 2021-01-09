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
      <Container
        className="people"
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          column-gap: 5vw;
          margin: 10vw;

          img {
            width: 100%;
          }

          p {
            font-size: initial;
          }

          a {
            position: static;
            color: black;
            text-decoration: none;
          }

          p:nth-of-type(1) {
            font-size: 18px;
          }

          @media only screen and (max-width: 425px) {
            margin-left: 3vw;
            margin-right: 3vw;
          }
        `}
      >
        <div>
          <img src={content.portrait_1} />
          <div
            dangerouslySetInnerHTML={{ __html: content.description_1 }}
          ></div>
        </div>

        <div>
          <img src={content.portrait_2} />
          <div
            dangerouslySetInnerHTML={{ __html: content.description_2 }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default connect(About);

const Container = styled.div``;
