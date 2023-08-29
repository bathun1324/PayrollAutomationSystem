// import { useLocation, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";
// import styled from "styled-components";

// const SContainer = styled.div`
// width: 100%;
// height: 100%;
// `;

// const SSection = styled.section<{ isOverWidth }>`
// margin: 0 auto;
// padding-top: 80px;
// min-height: calc(100vh - 120px); // nav or footer height 변경
// max-width: ${({ isOverWidth }) => (isOverWidth ? "1600px" : "1130px")};
// `;


// const { pathname } = useLocation();
// const [isOverWidth, setIsOverWidth] = useState(false);

// useEffect(() => {
//   if (pathname === "/main" || pathname === "/main/*") {
//   setIsOverWidth(true);
// } else {
//   setIsOverWidth(false);
// }
// }, [pathname]);



const SharedLayout = () => {

return (
  <div></div>
//     <SContainer>
//       <SSection isOverWidth={isOverWidth}>
//         <Outlet />
//       </SSection>
//     </SContainer>
);
};

// export default SharedLayout;