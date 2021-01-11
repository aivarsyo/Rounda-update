import React, {useEffect, useState} from "react";
import { Global, connect, css } from "frontity";

import cursorStyle from "../css/cursor.css";

var classNames = require('classnames');

const Cursor = () => {

    const isMobile = () => {
        const ua = navigator.userAgent;
        return /Android|Mobi/i.test(ua);
    };
    
    const Cursor = () => {
        if (typeof navigator !== "undefined" && isMobile()) return null;
    
        const [position, setPosition] = useState({ x: 0, y: 0 });
        const [clicked, setClicked] = useState(false);
        const [linkHovered, setLinkHovered] = useState(false);
        const [textHovered, setTextHovered] = useState(false);
        const [hidden, setHidden] = useState(false);
    
        useEffect(() => {
            addEventListeners();
            handleLinkHoverEvents();
            handleTextHoverEvents();
            return () => removeEventListeners();
        }, []);
    
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };
    
        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
    
        const onMouseDown = () => {
            setClicked(true);
        };
    
        const onMouseUp = () => {
            setClicked(false);
        };
    
        const onMouseLeave = () => {
            setHidden(true);
        };
    
        const onMouseEnter = () => {
            setHidden(false);
        };
    
        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a,img").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHovered(true));
                el.addEventListener("mouseout", () => setLinkHovered(false));
            });
        };

        const handleTextHoverEvents = () => {
            document.querySelectorAll("p").forEach((el) => {
                el.addEventListener("mouseover", () => setTextHovered(true));
                el.addEventListener("mouseout", () => setTextHovered(false));
            });
        };
    
        const cursorClasses = classNames("cursor", {
            "cursor--clicked": clicked,
            "cursor--hidden": hidden,
            "cursor--link-hovered": linkHovered,
            "cursor--text-hovered": textHovered
        });
    
        return (
            <div
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        );
    };


  return (
    <>
    <Global styles={css(globalStyles, cursorStyle)}></Global>
      <Cursor/>
    </>
  );
};

export default connect(Cursor);

const globalStyles=css`

html, body{
    cursor: none;
  }

  html *, body *{
    cursor: none;
  }
`
