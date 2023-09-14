import { FaClock } from "react-icons/fa";
import { HiDocumentText, HiDocumentDuplicate } from "react-icons/hi";
import { TbReportMoney, TbPigMoney, TbDeviceMobileVibration } from "react-icons/tb";
import { ImProfile, ImCalendar } from "react-icons/im";
import { RiGroup2Fill, RiUserSettingsLine, } from "react-icons/ri";
import { MdOutlineFreeCancellation, MdTableView, MdLibraryBooks, MdLocalAirport } from "react-icons/md";


export const managerMenuItems = [
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

export const userMenuItems = [
  {
    title: "사원정보",
    content: ["사원정보조회", "가족정보조회"],
    innerLink: ["/user/employeeinfocheck", "/user/employeefamilycheck"],
  },
  {
    title: "근태관리",
    content: ["휴가사용현황", "출장사용현황", "근태조회"],
    innerLink: ["/user/vacation", "/user/businesstrip", "/admin/attendance"],
  },
  {
    title: "신청서",
    content: ["휴가신청서", "출장신청서"],
    innerLink: ["/user/vacation/vacationform", "/user/businesstrip/businesstripform"],
  },

];

// 결재권자 메뉴아이템
export const superadminMenuItems = [
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



export const operatorMenuItems = [
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



export const managerIconMapping = {
  0: RiGroup2Fill,
  1: RiUserSettingsLine,
  2: ImProfile,
  3: ImCalendar,
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

export const superadminIconMapping = {
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


export const userIconMapping = {
  0: RiUserSettingsLine,
  1: RiGroup2Fill,
  2: ImProfile,
  3: MdLibraryBooks,
};

export const operatorIconMapping = {
  0: RiGroup2Fill,
  1: RiUserSettingsLine,
};

