import styled from "styled-components";
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
// import { ex_visible, set_ex } from '../SideNav/AppSidebar'
// import { AppBreadcrumb } from './index'
// import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'

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

const Header = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* 메뉴버튼 */}
        <CHeaderToggler className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* 화면작아졌을 떄, 로고출력 */}
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <SCompanyWrapper>Payroll Auto</SCompanyWrapper>
        </CHeaderBrand>
        {/* 상단메뉴 */}
        <CHeaderNav className="d-none d-md-flex me-auto">
        </CHeaderNav>
        {/* 상단아이콘 */}
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink href="#">
              계약 만료일: 2025-12-31
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilUser} />UserName
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              로그아웃
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* 드롭다운, 얼굴 클릭하면 드롭다운 내려오는 것 */}
        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>
      {/* <CHeaderDivider />
      상단 경로표시 
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}


export default Header;