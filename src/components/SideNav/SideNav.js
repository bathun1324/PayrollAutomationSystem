import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { HiDocumentText, HiDocumentDuplicate } from "react-icons/hi";
import { TbReportMoney, TbPigMoney, TbDeviceMobileVibration } from "react-icons/tb";
import { ImProfile, ImCalendar } from "react-icons/im";
import { RiGroup2Fill, RiUserSettingsLine, } from "react-icons/ri";
import { MdOutlineFreeCancellation, MdTableView, MdLibraryBooks, MdLocalAirport } from "react-icons/md";
import { mobile } from "../../assets/styles/Theme";
import { css } from "styled-components";
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import CIcon from '@coreui/icons-react'


const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
  min-width: 300px;

  

  overflow-y: auto;

  max-height: 100%;
  min-height: calc(100vh-200px);
  background-color: #548AFF;
  box-shadow: 2px 0 2.94px 0.06px rgba(4, 26, 55, 0.16);

  ${mobile(css`
  width: 35%;
  min-width: 35%;
  background-color: rgba(84, 138, 255, 0.8);

  /* z-index를 높여서 다른 컴포넌트 위로 표시되도록 설정 */
  z-index: 1000;
  position: fixed;
  // isOpen이 false일 때는 보이지 않도록 설정
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  
  /* isOpen 프롭에 따라 transform 속성 적용 */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
`)}
`;


const SMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  padding: 15% 15%;

  
  div {
    font-size: 1.1em;
    color: white;
    font-weight: 500;
    letter-spacing : 1px;
}


  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    padding-top: 15px;
    color: white;
    font-size: 0.8em;

    &:hover, &:active {
      color: ${({ theme }) => theme.colors.blue010};
      text-decoration: none;
    }
  }

    
  ${mobile(css`
  font-size: 0.7em;
  width: 100%;

  div {
    width: 100%;
  }

`)}

`

const SAccordion = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  &:hover, &:active {
    color: ${({ theme }) => theme.colors.blue010};
    text-decoration: none;
    cursor: pointer;
  }

`
const SAccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;


`

const SAccordionContent = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
  
  `

const IconWrapper = styled.span`
  font-size: 1.5em;

  `;

const Title = styled.span`
  font-size: 0.9em; 
  ${mobile(css`
/
  border: 1px solid red;
`)}
`;


const SideNav = ({ isOpen, userRole, menuItems: navMenuItems, iconMapping: navIconMapping }) => {
  // admin
  // const managerMenuItems = [
  //   {
  //     component: CNavItem,
  //     name: '부서관리',
  //     to: '/admin/depart',
  //     icon: <CIcon icon={RiGroup2Fill} />,


  //   }
  // ];
  const managerMenuItems = [
    {
      title: "부서관리",
      content: ["부서정보"],
      innerLink: ["/admin/depart"],
    },
    {
      title: "사원정보관리",
      content: ["사원정보"],
      innerLink: ["/admin/employee"],
    },
    {
      title: "직원명부",
      content: ["직원명부조회", "퇴직자명부조회"],
      innerLink: ["/admin/employeelist", "/admin/retirelist"],
    },
    {
      title: "근태관리",
      content: ["출퇴근 확인 및 조회", "근태조회", "출퇴근관리"],
      innerLink: ["/admin/emplcommute", "/admin/attendance", "/admin/commute"],
    },
    {
      title: "연차사용내역",
      content: ["연차사용내역조회"],
      innerLink: ["/admin/annual"],
    },
    {
      title: "근로시간관리",
      content: ["기본근로시간관리", "소정근로시간관리", "휴일관리"],
      innerLink: ["/admin/defaultworktime", "/admin/fixworktime", "/admin/dayoff"],
    },
    {
      title: "급여관리",
      content: ["급여관리"],
      innerLink: ["/admin/payrollmanage"],
    },
    {
      title: "급여항목 및 요율관리",
      content: ["보험료관리", "급여항목관리"],
      innerLink: ["/admin/premium", "/admin/ratemanage"],
    },
    {
      title: "급여대장",
      content: ["급여대장조회"],
      innerLink: ["/admin/payrollcheck"],
    },
    {
      title: "이체내역서",
      content: ["급여이체내역서"],
      innerLink: ["/admin/transferhistory"],
    },
    {
      title: "출국만기보험내역",
      content: ["출국만기보험내역 조회"],
      innerLink: ["/admin/departins"],
    },
    {
      title: "퇴직연금내역",
      content: ["퇴직연금조회"],
      innerLink: ["/admin/retire"],
    },
    {
      title: "보험적취내역",
      content: ["보험적취내역"],
      innerLink: ["/admin/insurunce"],
    },

    {
      title: "기기관리",
      content: ["비콘단말기관리"],
      innerLink: ["/admin/device"],
    },

  ];
  // 결재권자 메뉴아이템
  const superadminMenuItems = [
    {
      title: "부서관리",
      content: ["부서정보"],
      innerLink: ["/admin/depart"],
    },
    {
      title: "사원정보관리",
      content: ["사원정보"],
      innerLink: ["/admin/employee"],
    },
    {
      title: "직원명부",
      content: ["직원명부조회"],
      innerLink: ["/admin/employeelist"],
    },
    {
      title: "근태관리",
      content: ["출퇴근 확인 및 조회", "근태조회", "출퇴근관리"],
      innerLink: ["/admin/emplcommute", "/admin/attendance", "/admin/commute"],
    },
    {
      title: "신청서결재",
      content: ["신청서결재"],
      innerLink: ["/superadmin/doc"],
    },
    {
      title: "연차사용내역",
      content: ["연차사용내역조회"],
      innerLink: ["/admin/annual"],
    },
    {
      title: "근로시간관리",
      content: ["기본근로시간관리", "소정근로시간관리", "휴일관리"],
      innerLink: ["/admin/defaultworktime", "/admin/fixworktime", "/admin/dayoff"],
    },
    {
      title: "급여관리",
      content: ["급여관리"],
      innerLink: ["/admin/payrollmanage"],
    },
    {
      title: "급여항목 및 요율관리",
      content: ["보험료관리", "급여항목관리"],
      innerLink: ["/admin/premium", "/admin/ratemanage"],
    },
    {
      title: "급여대장",
      content: ["급여대장조회"],
      innerLink: ["/admin/payrollcheck"],
    },
    {
      title: "이체내역서",
      content: ["급여이체내역서"],
      innerLink: ["/admin/transferhistory"],
    },
    {
      title: "출국만기보험내역",
      content: ["출국만기보험내역 조회"],
      innerLink: ["/admin/departins"],
    },
    {
      title: "퇴직연금내역",
      content: ["퇴직연금조회"],
      innerLink: ["/admin/retire"],
    },
    {
      title: "보험적취내역",
      content: ["보험적취내역"],
      innerLink: ["/admin/insurunce"],
    },

    {
      title: "기기관리",
      content: ["비콘단말기관리"],
      innerLink: ["/admin/device"],
    },
  ]


  // 사용자 메뉴 아이템
  const userMenuItems = [
    {
      title: "사원정보",
      content: ["사원정보조회", "가족정보조회"],
      innerLink: ["/user/employeeinfocheck", "/user/employeefamilycheck"],
    },
    {
      title: "근태조회",
      content: ["휴가사용현황", "출장사용현황", "연차사용현황", "근태기록조회", "급여명세서조회"],
      innerLink: ["/user/vacation", "/user/businesstrip", "/user/annualusestatus", "/admin/attendance", ""],
    },
    {
      title: "신청서",
      content: ["신청서조회", "휴가신청서작성", "출장신청서작성", "연장근로신청서작성", "휴직신청서작성"],
      innerLink: ["/user/userdocsubmit", "/user/vacation/vacationform", "/user/businesstrip/businesstripform", "/user/overtimework/overtimeworkform", "/user/overtimework/overtimeworkform",],
    },
  ];

  // 운영자 
  const operatorMenuItems = [
    {
      title: "회사관리",
      content: ["회사정보"],
      innerLink: ["/operator/com"],
    },
    {
      title: "운영자관리",
      content: ["운영자정보"],
      innerLink: ["/operator/operatorinfo"],
    },

  ];



  const managerIconMapping = {
    0: RiGroup2Fill,
    1: RiUserSettingsLine,
    2: ImProfile,
    3: ImCalendar,
    4: MdOutlineFreeCancellation,
    4: MdOutlineFreeCancellation,
    5: FaClock,
    6: MdTableView,
    7: MdLibraryBooks,
    8: HiDocumentDuplicate,
    9: HiDocumentText,
    10: MdLocalAirport,
    11: TbPigMoney,
    12: TbReportMoney,
    13: TbDeviceMobileVibration,
  };

  const superadminIconMapping = {
    0: RiGroup2Fill,
    1: RiUserSettingsLine,
    2: ImProfile,
    3: ImCalendar,
    4: MdOutlineFreeCancellation,
    5: MdOutlineFreeCancellation,
    6: FaClock,
    7: MdTableView,
    8: MdLibraryBooks,
    9: HiDocumentDuplicate,
    10: HiDocumentText,
    11: MdLocalAirport,
    12: TbPigMoney,
    13: TbReportMoney,
    14: TbDeviceMobileVibration,
  }

  const userIconMapping = {
    0: RiUserSettingsLine,
    1: RiGroup2Fill,
    2: ImProfile,
    3: MdLibraryBooks,
  };


  const operatorIconMapping = {
    0: RiGroup2Fill,
    1: RiUserSettingsLine,
  };


  const infos = JSON.parse(localStorage.getItem('user_info'));
  const login_id = infos.login_id;

  userRole = login_id;


  //권한에 따라 매핑 아이템 달라짐
  const menuItems =
    userRole === "user" ? userMenuItems :
      userRole === "operator" ? operatorMenuItems :
        userRole === "superadmin" ? superadminMenuItems :
          managerMenuItems;

  console.log(userRole);

  const iconMapping =
    userRole === "user"
      ? userIconMapping
      : userRole === "operator"
        ? operatorIconMapping
        : userRole === "superadmin"
          ? superadminIconMapping
          : managerIconMapping;

  const parentRefs = useRef([]);
  const childRefs = useRef([]);
  const [isCollapse, setIsCollapse] = useState([]);
  const location = useLocation();

  useEffect(() => {
    parentRefs.current = parentRefs.current.slice(0, menuItems.length);
    childRefs.current = childRefs.current.slice(0, menuItems.length);
    setIsCollapse((prev) => prev.slice(0, menuItems.length));
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const itemIndex = menuItems.findIndex((menuItem) =>
      menuItem.innerLink.includes(path)
    );
    if (itemIndex !== -1) {
      const parentRef = parentRefs.current[itemIndex];
      const childRef = childRefs.current[itemIndex];
      const newIsCollapse = [...isCollapse];
      const isCollapsed = newIsCollapse[itemIndex];
      if (parentRef && childRef) {
        parentRef.style.height = `${childRef.scrollHeight}px`;
        newIsCollapse[itemIndex] = true;
        setIsCollapse(newIsCollapse);
      }
    }
  }, [location]);

  const handleOnClick = (index) => {
    const parentRef = parentRefs.current[index];
    const childRef = childRefs.current[index];
    const newIsCollapse = [...isCollapse];
    const isCollapsed = newIsCollapse[index];
    if (parentRef && childRef) {
      if (isCollapsed) {
        parentRef.style.height = "0";
      } else {
        parentRef.style.height = `${childRef.scrollHeight}px`;
      }
      newIsCollapse[index] = !isCollapsed;
      setIsCollapse(newIsCollapse);
    }
  };

  return (
    <SWrapper isOpen={isOpen}>
      <SMenuContainer>
        {menuItems.map((menuItem, index) => (
          <SAccordion key={index}>
            <SAccordionHeader onClick={() => handleOnClick(index)}>
              <IconWrapper>
                {React.createElement(iconMapping[index], {
                  style: { verticalAlign: "middle" },
                })}
              </IconWrapper>
              <Title>{menuItem.title}</Title>
            </SAccordionHeader>
            <SAccordionContent
              ref={(ref) => (parentRefs.current[index] = ref)}
            >
              <div ref={(ref) => (childRefs.current[index] = ref)}>
                {menuItem.content.map((item, itemIndex) => (
                  <Link key={itemIndex} to={menuItem.innerLink[itemIndex] || "/home/com"}>
                    {item}
                  </Link>
                ))}
              </div>
            </SAccordionContent>
          </SAccordion>
        ))}
      </SMenuContainer>
    </SWrapper>
  );
};

export default SideNav;