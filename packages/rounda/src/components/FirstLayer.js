import React, { useRef, useEffect } from "react";
import { connect, styled, css } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FirstLayer = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  //console.log(content);

  const videoSection = useRef(null);

  const pinTheSection = () => {
    ScrollTrigger.create({
      trigger: [videoSection.current],
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  };

  useEffect(() => {
    //pinTheSection();
  }, []);

  return (
    <>
      <Container ref={videoSection}>
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            overflow: hidden;
          `}
        >
          <video autoPlay loop muted playsInline css={css`
                /* width: 100vw;
                height: 56.25vw;
                min-height: 100vh;
                min-width: 177.77vh; 
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%); */
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}>
  <source src={content.introduction_video} type="video/mp4"/>
</video>
        </div>
      </Container>
    </>
  );
};

export default connect(FirstLayer);

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
