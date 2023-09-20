import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUserPlus, cilMobile, cilCalendar, cilCreditCard, cilBuilding, cilDescription, cilCash, cilDollar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: '회사관리',
    to: '/employee', // 수정
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0기초정보',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0부서정보',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직급정보',
            to: '/admin/device' // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0근태정보',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여정보',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴일정보',
            to: '/admin/device',  // 수정
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0회사정보',
        to: '/admin/device', // 수정
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0운영자정보',
        to: '/admin/device', // 수정
      },
    ],
  },

  {
    component: CNavGroup,
    name: '기초정보관리',
    to: '/employee', // 수정
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0조직정보',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0부서정보',
            to: '/admin/depart',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직급정보',
            to: '/admin/device' // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0근태정보',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0기본근로시간',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0소정근로시간',
            to: '/admin/device' // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0급여정보',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0보험료현황',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여항목관리',
            to: '/admin/device', // 수정
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0휴일정보',
        to: '/admin/device', // 수정
      },
    ],
  },
  {
    component: CNavGroup,
    name: '인사관리',
    to: '/employee', // 수정
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '\u00A0\u00A0사원정보',
        to: '/admin/device', // 수정
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0직원명부',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직원명부 조회',
            to: '/admin/employeelist'
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0퇴직자명부 조회',
            to: '/admin/device' // 수정
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: '근태관리',
    to: '/employee', // 수정
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0근태현황',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출퇴근 조회',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0일별 근태조회',
            to: '/admin/device' // 수정
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0사원별근태관리',
        to: '/admin/device', // 수정
      },
    ],
  },
  {
    component: CNavGroup,
    name: '급여관리',
    to: '/employee', // 수정
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
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여대장 조회',
            to: '/admin/device' // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0보험 및 세금',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출국만기보험내역 조회',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0퇴직연금 조회',
            to: '/admin/device', // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0보험적취내역',
            to: '/admin/device', // 수정
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0이체내역서',
        to: '/admin/device', // 수정
      },
    ],
  },
  {
    component: CNavGroup,
    name: '전자결제',
    to: '/employee', // 수정
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0휴가',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴가신청 현황',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴가신청서 작성',
            to: '/admin/device', // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연차사용내역 조회',
            to: '/admin/device', // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0출장',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출장신청 현황',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출장신청서 작성',
            to: '/admin/device', // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0교육',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0교육신청 현황',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0교육신청서 작성',
            to: '/admin/device' // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0연장근무',
        to: '/employee', // 수정
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연장근무신청 현황',
            to: '/admin/device',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연장근무신청 및 결재',
            to: '/admin/device', // 수정
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: '기기관리',
    to: '/employee', // 수정
    icon: <CIcon icon={cilMobile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '\u00A0\u00A0비콘단말기 관리',
        to: '/admin/device', // 수정
      },
    ],
  },
  {
    component: CNavItem,
    name: '초기사이트 이동',
    to: '/admin/device' // 수정
  },

  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: '부서관리',
  //   to: '/admin/depart',
  //   icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: '사원정보관리',
  //   to: '/employee',
  //   icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: '사원정보',
  //       to: '/admin/employee',
  //     },
  //     {
  //       component: CNavItem,
  //       name: '직원명부조회',
  //       to: '/admin/employeelist'
  //     }
  //   ],
  // },
]

export default _nav
