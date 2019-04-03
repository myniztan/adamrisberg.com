import React from "react";
import { css } from "emotion";

function Section({ id, sectionRef, children }) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={css`
        max-width: 1280px;
        margin: 0 auto 80px auto;
        padding: 0 20px;
        &:last-of-type {
          margin: 0 auto;
          padding: 0 20px 80px 20px;
          overflow: hidden;
        }
      `}
    >
      {children}
    </section>
  );
}

export default Section;
