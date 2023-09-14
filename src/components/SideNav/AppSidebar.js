import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
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
  // 작동안함
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  console.log('sidebarshow:', sidebarShow)
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}    >
      {/* 사이드바의 로고출력 */}
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <SCompanyWrapper className="sidebar-brand-full">Payroll Auto</SCompanyWrapper>
      </CSidebarBrand>
      {/* 내용 */}
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => setUnfoldable(!unfoldable)} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
