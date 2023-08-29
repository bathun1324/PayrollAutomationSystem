import styled, { css } from "styled-components";

export const theme = {
  breakPoints: {
    mobile: "481px",
    tablet: "758px",
    desktop: "1281px",
  },
  colors: {
    black010: "#F5F5F5",
    black050: "#D6D6D6",
    black100: "#8d8d8d",
    black200: "#a5a5a5",
    black250: "#797979",
    black300: "#434343",
    black400: "#707070",
    black500: "#161616",

    //카테고리 헤더 색상
    
    black110: "#7F7F7F",


    blue010: "#ECF0FF",
    blue090: "#548AFF",

    red010: "#FA2439",
  },
};

export const unmobile = (styles) => css`
  @media screen and (min-width: ${parseInt(theme.breakPoints.mobile) + 1}px) {
    ${styles}
  }
`;

export const mobile = (styles) => css`
  @media screen and (max-width: ${theme.breakPoints.mobile}) {
    ${styles}
  }
`;

export const tablet = (styles) => css`
  @media screen and (max-width: ${theme.breakPoints.tablet}) {
    ${styles}
  }
`;

export const desktop = (styles) => css`
  @media screen and (max-width: ${theme.breakPoints.desktop}) {
    ${styles}
  }
`;

export const colors = (code) => {
  return theme.colors[code];
};
