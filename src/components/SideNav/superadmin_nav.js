import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUserPlus, cilMobile, cilCalendar, cilCreditCard, cilBuilding, cilDescription, cilCash, cilDollar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const superadmin_nav = [
  {
    component: CNavGroup,
    name: '회사관리',
    to: '/employee',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0기초정보',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0부서정보',
            to: '/superadmin/setdepartment',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직급정보',
            to: '/superadmin/setrole',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0근태정보',
            to: '/superadmin/setattendance',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A04대보험요율',
            to: '/superadmin/setinsrncrate',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여정보',
            to: '/superadmin/setsalary',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴일정보',
            to: '/superadmin/sethday',
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0회사정보',
        to: '/superadmin/company',
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0운영자정보',
        to: '/superadmin/operatorinfo',
      },
    ],
  },

  {
    component: CNavGroup,
    name: '기초정보관리',
    to: '/employee',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '\u00A0\u00A0조직정보',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0부서정보',
            to: '/superadmin/depart',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직급정보',
            to: '/superadmin/dummy',  // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0근태정보',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0기본근로시간',
            to: '/superadmin/dummy',  // 수정
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0급여정보',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A04대보험요율',
            to: '/superadmin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0소득세율',
            to: '/superadmin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여항목',
            to: '/superadmin/dummy',  // 수정
          },
        ],
      },
      {
        component: CNavItem,
        name: '\u00A0\u00A0휴일정보',
        to: '/superadmin/dummy',  // 수정
      },
    ],
  },
  {
    component: CNavGroup,
    name: '인사관리',
    to: '/employee',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '\u00A0\u00A0사원정보',
        to: '/superadmin/employee',
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0직원명부',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0직원명부 조회',
            to: '/superadmin/employeelist'
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0퇴직자명부 조회',
            to: '/superadmin/retirelist'
          },
        ],
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
            to: '/superadmin/emplcommute',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0일별 근태조회',
            to: '/superadmin/attendance',
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0근태관리',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0사원별 근태관리',
            to: '/superadmin/commute',
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
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여관리',
            to: '/superadmin/payrollmanage',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0급여대장 조회',
            to: '/superadmin/payrollcheck',
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0보험 및 세금',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출국만기보험내역',
            to: '/superadmin/departins',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0퇴직연금내역',
            to: '/superadmin/retire',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0보험적취내역',
            to: '/superadmin/insurunce',
          },
        ],
      },
      {
        component: CNavGroup,
        name: '\u00A0\u00A0급여이체현황',
        to: '/employee',
        items: [
          {
            component: CNavItem,
            name: '\u00A0\u00A0이체내역',
            to: '/superadmin/transferhistory',
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
            to: '/superadmin/vacation',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0휴가신청서 작성',
            to: '/superadmin/vacation/vacationform',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연차사용내역 조회',
            to: '/superadmin/annualusestatus',
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
            to: '/superadmin/businesstrip',
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0출장신청서 작성',
            to: '/superadmin/businesstrip/businesstripform',
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
            to: '/superadmin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0교육신청서 작성',
            to: '/superadmin/dummy',  // 수정
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
            to: '/superadmin/dummy',  // 수정
          },
          {
            component: CNavItem,
            name: '\u00A0\u00A0\u00A0\u00A0연장근무신청서 작성',
            to: '/superadmin/dummy',  // 수정
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
  {
    component: CNavGroup,
    name: '기기관리',
    to: '/employee',
    icon: <CIcon icon={cilMobile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '\u00A0\u00A0비콘단말기 관리',
        to: '/superadmin/device',
      },
    ],
  },
]

export default superadmin_nav
