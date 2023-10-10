import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUserPlus, cilMobile, cilCalendar, cilCreditCard, cilBuilding, cilDescription, cilCash, cilDollar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const user_nav = [

  {
    component: CNavGroup,
    name: '인사관리',
    to: '/employee',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '\u00A0\u00A0사원정보',
        to: '/user/employee',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '근태관리',
    to: '/employee',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0근태현황',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출퇴근 조회',
            to: '/user/emplcommute',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0일별 근태조회',
            to: '/user/attendance',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: '급여관리',
    to: '/employee',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0급여관리',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여관리',
            to: '/user/payrollmanage',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: '전자결재',
    to: '/employee',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0휴가',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴가신청 현황',
            to: '/user/vacation',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴가신청서 작성',
            to: '/user/vacation/vacationform',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연차사용내역 조회',
            to: '/user/annualusestatus',
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0출장',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출장신청 현황',
            to: '/user/businesstrip',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출장신청서 작성',
            to: '/user/businesstrip/businesstripform',
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0교육',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0교육신청 현황',
            to: '/admin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0교육신청서 작성',
            to: '/admin/dummy',  // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0연장근무',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연장근무신청 현황',
            to: '/admin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연장근무신청서 작성',
            to: '/admin/dummy',  // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0결근',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0결근 현황',
            to: '/superadmin/dummy',  // 수정          
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0결근사유서 작성',
            to: '/superadmin/dummy',  // 수정         
          },
        ],
      },
    ],
  },
]

export default user_nav
