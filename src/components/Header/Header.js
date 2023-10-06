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
import { AppHeaderDropdown } from '../Dropdown/index'
// import { AppBreadcrumb } from './index'
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

const Header = ({ breadcrumb }) => {
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <SCompanyWrapper>Payroll Auto</SCompanyWrapper>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
        </CHeaderNav>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            계약 만료일: 2025-12-31
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CHeaderNav>
              <AppHeaderDropdown />
            </CHeaderNav>
          </CNavItem>
          <CNavItem>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        {breadcrumb}
      </CContainer>
    </CHeader>
  )
}


export default Header;