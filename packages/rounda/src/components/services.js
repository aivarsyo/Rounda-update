import React from "react";
import { connect, css, styled } from "frontity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Footer from "./footer";
import Cursor from "./cursor";

const Services = ({ state }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  const page = state.source[data.type][data.id];
  //console.log(page);
  const content = page.acf;
  console.log(content);

  const points = [];
  let counter = 0;

  const getPoints = () => {
    content.points.forEach((el) => {
      counter++;
      const onePoint = (
        <p>
          <sup>{counter}.</sup> {el.point}
        </p>
      );
      points.push(onePoint);
    });
  };

  getPoints();

  const Points = () => {
    return points;
  };

  const services = [];

  const getServices = () => {
    content.services.forEach((service) => {
      const serviceIcon = service.service_icon;
      const serviceTitle = service.service_title;
      const serviceText = service.service_text;
      const oneService = (
        <div
          className="oneService"
          css={css`
            display: grid;
            grid-template-columns: 50px 1fr 2fr 1fr;
            column-gap: 3vw;
            border-top: 0.5px solid #707070;
            border-bottom: 0.5px solid #707070;
            height: 90px;

            @media only screen and (max-width: 700px) {
              grid-template-columns: 50px auto auto;
            }
          `}
          onClick={(event) => {
            openUp(event);
          }}
        >
          <div css={css`
          height: 90px;
          display: grid;
          align-items: center;
          `}>
            <img
              css={css`
                width: 100%;
                height: auto;
              `}
              src={serviceIcon}
            />
          </div>
          <div css={css`
          height: 90px;
          display: grid;
          align-items: center;
          `}>
          <p css={css`
          font-size: 18px;
          `}>{serviceTitle}</p>
          </div>
          <div
            className="oneServiceText"
            css={css`
              opacity: 0;
              pointer-events: none;
              margin-top: 20px;

              @media only screen and (max-width: 700px) {
                grid-column: 1/3;
                grid-row: 2/3;
                margin-top: 0;
              }

              @media only screen and (max-width: 425px) {
                grid-column: 1/4;
              }
            `}
            dangerouslySetInnerHTML={{ __html: serviceText }}
          ></div>
          <div css={css`
          height: 90px;
          display: grid;
          align-items: center;
          `}>
          <svg
            css={css`
              justify-self: end;
              grid-column: 4/5;
            `}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 59 59"
          >
            <g
              id="Group_43"
              data-name="Group 43"
              transform="translate(-1440.5 -2358.5)"
            >
              <line 
                id="Line_13"
                data-name="Line 13"
                y2="59"
                transform="translate(1470.5 2358.5)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <line
                id="Line_14"
                data-name="Line 14"
                x1="59"
                transform="translate(1440.5 2388.5)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
            </g>
          </svg>
          </div>
        </div>
      );
      services.push(oneService);
    });
  };

  getServices();

  const ServicesTable = () => {
    return services;
  };

  const openUp = (event) => {
    const hiddenText = event.currentTarget.querySelector(".oneServiceText");
    const plusIcon = event.currentTarget.querySelector("#Line_13");

    if (event.currentTarget.classList.contains("opened")) {
      gsap.to(event.currentTarget, 0.3, {
        height: 90,
      });
      gsap.to(hiddenText, 0.1, {
        opacity: 0,
      });
      gsap.to(plusIcon, 0.3, {
        attr:{x1: 0, x2: 0, y1:0, y2:59}
      })
      event.currentTarget.classList.remove("opened");
    } else {
      gsap.to(event.currentTarget, 0.3, {
        height: "auto",
      });
      gsap.to(hiddenText, 0.3, {
        delay: 0.2,
        opacity: 1,
      });
      gsap.to(plusIcon, 0.3, {
        attr:{x1: -30, x2: 30, y1:30, y2:30}
      })
      event.currentTarget.classList.add("opened");
    }
  };

  return (
    <>
      <Cursor />
      <Container className="main">
        <div
          className="firstSection"
          css={css`
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 90%;
              height: 60%;
              display: flex;
              flex-direction: row;
              justify-content: center;

              @media only screen and (max-width: 790px) {
                flex-direction: column;
                height: initial;
              }
            `}
          >
            <p
              css={css`
                font-size: 100px;
                margin: 0;

                @media only screen and (max-width: 425px) {
                font-size: 20vw;
                }
              `}
              dangerouslySetInnerHTML={{ __html: content.title_1 }}
            ></p>
            <div
              css={css`
                font-size: 24px;
                align-self: flex-end;
                margin-left: 1.5em;

                @media only screen and (max-width: 425px) {
                  font-size: 5vw;
                  }
              `}
              dangerouslySetInnerHTML={{ __html: content.paragraph_1 }}
            ></div>
          </div>
        </div>

        <div
          className="secondSection"
          css={css`
            width: 100%;
            min-height: 100vh;
            background-color: black;
            display: flex;
            flex-direction: column;
            color: white;
          `}
        >
          <p
            css={css`
              font-size: 24px;
              margin: 10vh 0 0 5vw;

              @media only screen and (max-width: 425px) {
                font-size: 5.7vw;
              }
            `}
            dangerouslySetInnerHTML={{ __html: content.title_2 }}
          ></p>

          <div
            css={css`
              font-size: 26px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              margin: auto 10% auto 10%;
              column-gap: 5vw;
              row-gap: 5vh;

              p sup {
                color: #f7f7a8;
              }

              @media only screen and (max-width: 600px) {
                grid-template-columns: 1fr;
                row-gap: 0;
                margin: 5vh 10% 5vh 10%;
              }

              @media only screen and (max-width: 425px) {
                font-size: 6.1vw;
              }
            `}
          >
            <Points />
          </div>
        </div>

        <div
          css={css`
            align-self: center;
            width: 70%;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            margin: 90px 0 90px 0;

            @media only screen and (max-width: 880px) {
width:90%;
            }
          `}
        >
          <ServicesTable />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default connect(Services);

const Container = styled.main`
  background-color: #e7e9f2;
  display: flex;
  flex-direction: column;
`;