import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CContainer,
  CHeader, CCard, CCardBody, CRow, CCol,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import { } from '@reduxjs/toolkit'
import CIcon from '@coreui/icons-react'
import { cilUser, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
// import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// import styled div
import styled from "styled-components";
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";
// sidebar nav config
import superadmin_nav from './superadmin_nav'
import admin_nav from './admin_nav'
import user_nav from './user_nav'
const SCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 45%;
  padding: 0px 30px;
  gap: 40px;
  font-size: 1.3em;
  font-weight: 800;

  ${mobile(css`
  font-size: 0.8em;
`)}
`
// 초기값
const initialState = {
  name: false,
  price: false,
};


const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        // visible 값이 변경될 때마다 dispatch를 호출하여 상태 업데이트
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      {/* 사이드바를 접었을때, 로고출력 */}
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <SCompanyWrapper className="sidebar-brand-full">Payroll Auto</SCompanyWrapper>
      </CSidebarBrand>
      {/* 사이드바 내용 */}
      <CSidebarNav>
        <SimpleBar>
          {(login_id === "superadmin") ? (
            <AppSidebarNav items={superadmin_nav} />
          ) : (
            (login_id === "admin") ? (
              <AppSidebarNav items={admin_nav} />
            ) : (
              <AppSidebarNav items={user_nav} />
            )
          )
          }
        </SimpleBar>
      </CSidebarNav>
      {/* 하단의 화살표 모양, 사이드바를 숨기는거 on off 가능하게 함 */}
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}
//   return (
//     <div>
//       {/* Sidebar 사이드바 부분 */}
//       <CSidebar
//         position="fixed"
//         unfoldable={unfoldable}
//         visible={sidebarShow}
//         onVisibleChange={(visible) => {
//           // visible 값이 변경될 때마다 dispatch를 호출하여 상태 업데이트
//           dispatch({ type: 'set', sidebarShow: visible })
//         }}
//       >
//         {/* 사이드바의 로고출력 */}
//         <CSidebarBrand className="d-none d-md-flex" to="/">
//           <SCompanyWrapper className="sidebar-brand-full">Payroll Auto</SCompanyWrapper>
//         </CSidebarBrand>
//         <CSidebarNav>
//           <SimpleBar>
//             <AppSidebarNav items={navigation} />
//           </SimpleBar>
//         </CSidebarNav>
//         <CSidebarToggler
//           className="d-none d-lg-flex"
//           onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
//         />
//       </CSidebar>
//     </div >
//   )
// }

export default React.memo(AppSidebar)
