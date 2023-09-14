import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilGroup,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: '부서관리',
    to: '/admin/depart',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '사원정보관리',
    to: '/employee',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '사원정보',
        to: '/admin/employee',
      },
    ],
  },
]

export default _nav
