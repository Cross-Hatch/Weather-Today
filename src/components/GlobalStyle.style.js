import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /*!
* Resets form Piccalilli - A Modern CSS Reset
* @link https://piccalil.li/blog/a-modern-css-reset/
*/

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* My reset */
:root {
  color-scheme: dark light;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

h1 {
  font-weight: bold !important;
  color: ${(props) => props.theme.light};
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  font-family: "Ubuntu", sans-serif !important;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;

  /* My reset */
  background-image: ${(props) => props.theme.gradient};
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: ${(props) => props.theme.light};
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  max-height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0 20vw;
    height: calc(100vh - 70px);
  }
`;
