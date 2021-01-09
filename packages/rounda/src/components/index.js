import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Home from "./home";
import Works from "./works";
import Empty from "./empty";
import About from "./about";
import Services from "./services";
import SingleWork from "./singleWork";
import Loading from "./preloader";
import { useTransition, animated } from "react-spring";

import gangsterRegular from "../fonts/gangstergrotesk-regular.ttf";
import gangsterLight from "../fonts/gangstergrotesk-light.ttf";

import appleTouchIcon from "../images/favicon/apple-touch-icon.png";
import favicon32 from "../images/favicon/favicon-32x32.png";
import favicon16 from "../images/favicon/favicon-16x16.png";
//import webManifest from "../images/favicon/site.webmanifest";
import safariPinnedTab from "../images/favicon/safari-pinned-tab.svg";

const Theme = ({ state, actions }) => {
  //console.log(state);
  const data = state.source.get(state.router.link);
  //console.log(data);
  //const page = state.source[data.type][data.id];
  //console.log(page);
  //const content = page.acf;
  //console.log(content);

  const pageTransitions = useTransition(state.router.link, null, {
    config: { duration: 500 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" },
  });

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
        <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <Global styles={globalStyles} />

      <Header />
      {pageTransitions.map(({ props, key }) => (
        <animated.div style={props} key={key}>
      <Switch>
        <Home when={data.isHome} />
        {/* <Empty when={data.id == 35} /> */}
        <Works when={data.id == 35 && data.isReady} />
        <About when={data.id == 53 && data.isReady} />
        <Services when={data.id == 75 && data.isReady} />
        <SingleWork when={data.isPost && data.isReady} />
        <Loading when={data.isFetching} />
      </Switch>
      </animated.div>
      ))}
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @font-face {
    font-family: "gangsterRegular";
    src: url(${gangsterRegular});
  }

  @font-face {
    font-family: "gangsterLight";
    src: url(${gangsterLight});
  }

  body {
    margin: 0;
    font-family: "gangsterLight";
  }

  p::selection {
    background-color: #f7f7a8;
  }

  iframe {
    border: none;
  }
`;
