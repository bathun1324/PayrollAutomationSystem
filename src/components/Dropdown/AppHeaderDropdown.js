import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilSettings,
  cilUser,
  cilAccountLogout,
  cilPen,
  cilDescription,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'


const AppHeaderDropdown = () => {
  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;
  if (login_id == "user") {
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" caret={false}>
          <CIcon icon={cilUser} />{login_id}
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            게시판
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            개인정보
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilPen} className="me-2" />
            비밀번호변경
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="/">
            <CIcon icon={cilAccountLogout} className="me-2" />
            로그아웃
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
  else {
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" caret={false}>
          <CIcon icon={cilUser} />{login_id}
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilDescription} className="me-2" />
            계약연장 및 해지신청
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            문의사항
            {/* <CBadge color="success" className="ms-2">
          42
        </CBadge> */}
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            게시판
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            개인정보
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilPen} className="me-2" />
            비밀번호변경
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="/">
            <CIcon icon={cilAccountLogout} className="me-2" />
            로그아웃
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    )
  }
}

export default AppHeaderDropdown
