import React, { useRef, useEffect } from "react";
import { Global, connect, styled, css } from "frontity";
import logo from "../images/logo.png";
import menuIcon from "../images/menuIcon.png";
import closeIcon from "../images/closeIcon.png";
import Link from "./link";
import gsap from "gsap";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);

  const menu = useRef(null);
  const overlayMenu = useRef(null);

  const showMenu = () => {
    gsap.to([menu.current], 0.5, {
      /* scale: 200, */
      width: "100%",
      height: "100%",
      opacity: 1,
    });

    document.querySelector(".menu").style.zIndex = "4";

    gsap.to([overlayMenu.current], 0.5, {
      delay: 0.2,
      opacity: 1,
    });
  };

  const hideMenu = () => {
    gsap.to([menu.current], 0.5, {
      /* scale: 1, */
      width: "0",
      height: "0",
      opacity: 0,
    });

    gsap.to([overlayMenu.current], 0.5, {
      opacity: 0,
    });

    document.querySelector(".menu").style.zIndex = "-2";
  };

  useEffect(() => {
    return () => {
      hideMenu();
    };
  }, [data]);

  return (
    <>
      <Global styles={globalStyles} />
      <Link href="/">
        <img
          css={css`
            width: 45px;
          `}
          src={logo}
        ></img>
      </Link>

      <div
        css={css`
          mix-blend-mode: difference;
          position: fixed;
          top: 34px;
          right: 25px;
          /* cursor: pointer; */
          z-index: 2;
        `}
        onClick={showMenu}
      >
        <img
          css={css`
            width: 45px;
          `}
          src={menuIcon}
        ></img>
      </div>

      <div
        ref={menu}
        css={css`
          background-color: #5438d5;
          position: fixed;
          top: 0;
          right: 0;
          width: 20px;
          height: 20px;
          /* border-radius: 50%; */
          z-index: 2;
          opacity: 0;
        `}
      ></div>

      <Menu className="menu" ref={overlayMenu}>
        <div
          css={css`
            padding-right: 10vw;
          `}
        >
          <p><Link href="/works">Works</Link></p>
          <p><Link href="/about">About us</Link></p>
          <p><Link href="/services">Services</Link></p>
        </div>

        <div
          css={css`
            padding-top: 20vh;
            padding-left: 10vw;
          `}
        >
          <div>
            <p>Tell us hi!</p>
            <p><a href="mailto:mail@rounda.com">mail@rounda.com</a></p>
          </div>

          <div>
            <p>Or just call us..</p>
            <p><a href="tel:68944503">68 94 45 03</a></p>
          </div>
        </div>

        <img
          src={closeIcon}
          css={css`
            position: fixed;
            top: 30px;
            right: 30px;
            width: 25px;
            /* cursor: pointer; */
          `}
          onClick={hideMenu}
        />
      </Menu>
    </>
  );
};

export default connect(Header);

const globalStyles = css`
  a:nth-of-type(1) {
    position: fixed;
    top: 20px;
    left: 20px;
    mix-blend-mode: difference;
    z-index: 5;
  }
`;

const Menu = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: -2;
  opacity: 0;
  justify-content: center;
  color: white;
  font-family: "gangsterRegular";
  font-size: 25px;

  a {
    color: white;
    text-decoration: none;
    position: static;
  }

  p {
    margin: 0;
  }

  div:nth-of-type(1) {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  }

  div:nth-of-type(2) {
    align-self: flex-start;

    a {
      color: #f7f7a8;
    }

    div:nth-of-type(1) {
      margin-bottom: 20px;
    }
  }
`;
