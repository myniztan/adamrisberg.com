import React from "react";
import { HamburgerIcon, LinkedInIcon, GithubIcon, CodePenIcon } from "./icons";
import { css } from "emotion";
import { breakpoints } from "../data";

const liStyle = css`
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
`;

const anchorStyle = css`
  display: inline-block;
`;

function MainNav({ openNav, showHamburger, sectionRefs }) {
  const handleLinkClick = section => e => {
    e.preventDefault();
    const targetY = sectionRefs[section].current.getBoundingClientRect().top;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <nav
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        height: 45px;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
      `}
    >
      {showHamburger && <HamburgerIcon onClick={openNav} />}
      <ul
        className={css`
          @media (max-width: ${breakpoints.medium}) {
            display: none;
          }
        `}
      >
        <li className={liStyle}>
          <a
            onClick={handleLinkClick("projects")}
            className={anchorStyle}
            href="#projects"
          >
            PROJECTS
          </a>
        </li>
        <li className={liStyle}>
          <a
            onClick={handleLinkClick("about")}
            className={anchorStyle}
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className={liStyle}>
          <a
            onClick={handleLinkClick("contact")}
            className={anchorStyle}
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
      <div
        className={css`
          & a {
            margin-left: 15px;
          }
          @media (max-width: ${breakpoints.medium}) {
            display: none;
          }
        `}
      >
        <a aria-label="Linkedin" href="https://www.linkedin.com/in/adamrisberg">
          <LinkedInIcon width="20px" height="20px" />
        </a>
        <a aria-label="Github" href="https://github.com/myniztan">
          <GithubIcon width="20px" height="20px" />
        </a>
        <a aria-label="Codepen" href="https://codepen.io/myniztan/">
          <CodePenIcon width="20px" height="20px" />
        </a>
      </div>
    </nav>
  );
}

export default MainNav;
