import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
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
import navigation from './_nav'

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


const AppSidebar = () => {
  const [unfoldable, setUnfoldable] = useState(false)
  const [visible, setVisible] = useState(true); // 초기에 사이드바를 보이도록 설정합니다.

  return (
    <div>
      {/* Sidebar 사이드바 부분 */}
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={visible}
        onVisibleChange={(val) => setVisible(val)}>
        {/* 사이드바의 로고출력 */}
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <SCompanyWrapper className="sidebar-brand-full">Payroll Auto</SCompanyWrapper>
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => setUnfoldable(!unfoldable)} />
      </CSidebar>
      {/* Header 헤더부분 */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <CHeader position="sticky" className="mb-4">
          <CContainer fluid>
            <CHeaderToggler className="ps-1"
              onClick={() => setVisible(!visible)}
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
          </CContainer>
        </CHeader>
      </div>
    </div>
  )
}

export default React.memo(AppSidebar)
