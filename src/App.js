import React, { createContext } from "react";
import './scss/style.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  AnnualManage,
  AnnualUseStatus,
  AttendanceManage,
  BusinessTripForm,
  BusinessTripStatus,
  CommuteDetail,
  CommuteManage,
  CompanyDetail,
  CompanyManage,
  DayOffManage,
  DepartmentManage,
  DepartureInsurance,
  DeviceDetail,
  DeviceManage,
  DocApprovalPage,
  EmployeeCommuteManage,
  EmployeeDetail,
  EmployeeFamilyCheck,
  EmployeeInfoCheck,
  EmployeeListManage,
  EmployeeManage,
  FixedWorkTimeManage,
  Home,
  InsuranceClaim,
  LeaveWorkForm,
  Login,
  NotFound,
  OperatorInfoManage,
  OvertimeWorkForm,
  PayrollCheck,
  PayrollManage,
  PremiumManage,
  RateManage,
  RetirePension,
  RetiredEmployeeListManage,
  TransferHistory,
  UserAttendance,
  UserAttendanceCheck,
  UserDocSubmit,
  VacationForm,
  VacationUseStatus,
  WorkTimeManage,
  Dummypage,
  SetDepartmentManage,
  SetAttendanceManage,
  SetHdayManage,
  SetInsrncrateManage,
  SetRoleManage,
  SetSalaryManage,
  ServiceInfo,
} from "./pages";
import { managerIconMapping, managerMenuItems, operatorIconMapping, operatorMenuItems, superadminIconMapping, superadminMenuItems, userIconMapping, userMenuItems } from './utils/userRollMenuItems';

// RoleContext 생성
export const UserRoleContext = createContext();
export const MenuItemsContext = createContext();
export const IconMappingContext = createContext();

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:companyName' element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* superadmin 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="superadmin">
          <MenuItemsContext.Provider value={managerMenuItems}>
            <IconMappingContext.Provider value={managerIconMapping}>
              <Routes>
                {/* (관리자 권한) superadmin 메뉴 페이지 라우팅 */}
                <Route path="/login" element={<Login />} />
                {/* 회사관리 */}
                <Route path="/superadmin/setdepartment" element={<SetDepartmentManage />} />
                <Route path="/superadmin/setattendance" element={<SetAttendanceManage />} />
                <Route path="/superadmin/sethday" element={<SetHdayManage />} />
                <Route path="/superadmin/setinsrncrate" element={<SetInsrncrateManage />} />
                <Route path="/superadmin/setrole" element={<SetRoleManage />} />
                <Route path="/superadmin/setsalary" element={<SetSalaryManage />} />

                <Route path="/superadmin/company" element={<CompanyManage />} />
                <Route path="/superadmin/company/companydetail" element={<CompanyDetail />} />
                <Route path="/superadmin/company/companydetail/:companyId" element={<CompanyDetail />} />
                <Route path="/superadmin/operatorinfo" element={<OperatorInfoManage />} />
                {/* 기초정보관리 */}
                <Route path="/superadmin/depart" element={<DepartmentManage />} />
                {/* 인사관리 */}
                <Route path="/superadmin/employee" element={<EmployeeManage />} />
                <Route path="/superadmin/employeelist" element={<EmployeeListManage />} />
                <Route path="/superadmin/retirelist" element={<RetiredEmployeeListManage />} />
                {/* 근태관리 */}

                {/* 급여관리 */}
                <Route path="/superadmin/payrollmanage" element={<PayrollManage />} />
                <Route path="/superadmin/payrollcheck" element={<PayrollCheck />} />
                <Route path="/superadmin/departins" element={<DepartureInsurance />} />
                <Route path="/superadmin/retire" element={<RetirePension />} />
                <Route path="/superadmin/insurunce" element={<InsuranceClaim />} />
                <Route path="/superadmin/transferhistory" element={<TransferHistory />} />
                {/* 전자결재 */}
                <Route path="/superadmin/vacation" element={<VacationUseStatus />} />
                <Route path="/superadmin/vacation/vacationform" element={<VacationForm />} />
                <Route path="/superadmin/annualusestatus" element={<AnnualUseStatus />} />
                <Route path="/superadmin/businesstrip" element={<BusinessTripStatus />} />
                <Route path="/superadmin/businesstrip/businesstripform" element={<BusinessTripForm />} />
                {/* 기기관리  */}
                <Route path="/superadmin/device" element={<DeviceManage />} />
                {/* 더미페이지, 임시페이지 */}
                <Route path="/superadmin/annual" element={<AnnualManage />} />
                <Route path="/superadmin/attendance" element={<AttendanceManage />} />
                <Route path="/superadmin/defaultworktime" element={<WorkTimeManage />} />
                <Route path="/superadmin/ratemanage" element={<RateManage />} />
                <Route path="/superadmin/emplcommute" element={<EmployeeCommuteManage />} />
                <Route path="/superadmin/commute" element={<CommuteManage />} />
                <Route path="/superadmin/fixworktime" element={<FixedWorkTimeManage />} />
                <Route path="/superadmin/dayoff" element={<DayOffManage />} />
                <Route path="/superadmin/premium" element={<PremiumManage />} />
                <Route path="/superadmin/employee/employeedetail" element={<EmployeeDetail />} />
                <Route path="/superadmin/employee/employeedetail/:id" element={<EmployeeDetail />} />
                <Route path="/superadmin/commute/commutedetail" element={<CommuteDetail />} />
                <Route path="/superadmin/device/devicedetail" element={<DeviceDetail />} />
                <Route path="/superadmin/dummy" element={<Dummypage />} />
                <Route path="/superadmin/doc" element={<DocApprovalPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </IconMappingContext.Provider>
          </MenuItemsContext.Provider>
        </UserRoleContext.Provider>

        {/* 운영자 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="admin">
          <MenuItemsContext.Provider value={operatorMenuItems}>
            <IconMappingContext.Provider value={operatorIconMapping}>
              <Routes>
                {/* (운영자 권한) operator메뉴 페이지 라우팅
                <Route path="/operator/operatorinfo" element={<OperatorInfoManage />} />
                <Route path="/operator/com" element={<CompanyManage />} />
                <Route path="/operator/com/:companyId" element={<CompanyDetail />} />
                <Route path="*" element={<NotFound />} /> */}
                <Route path="/admin/depart" element={<DepartmentManage />} />

                <Route path="/admin/employee" element={<EmployeeManage />} />
                <Route path="/admin/employeelist" element={<EmployeeListManage />} />
                <Route path="/admin/retirelist" element={<RetiredEmployeeListManage />} />

                <Route path="/admin/payrollmanage" element={<PayrollManage />} />
                <Route path="/admin/payrollcheck" element={<PayrollCheck />} />
                <Route path="/admin/departins" element={<DepartureInsurance />} />
                <Route path="/admin/retire" element={<RetirePension />} />
                <Route path="/admin/insurunce" element={<InsuranceClaim />} />
                <Route path="/admin/transferhistory" element={<TransferHistory />} />

                <Route path="/admin/vacation" element={<VacationUseStatus />} />
                <Route path="/admin/vacation/vacationform" element={<VacationForm />} />
                <Route path="/admin/annualusestatus" element={<AnnualUseStatus />} />
                <Route path="/admin/businesstrip" element={<BusinessTripStatus />} />
                <Route path="/admin/businesstrip/businesstripform" element={<BusinessTripForm />} />

                <Route path="/admin/device" element={<DeviceManage />} />

                <Route path="/admin/annual" element={<AnnualManage />} />
                <Route path="/admin/attendance" element={<AttendanceManage />} />
                <Route path="/admin/defaultworktime" element={<WorkTimeManage />} />
                <Route path="/admin/ratemanage" element={<RateManage />} />
                <Route path="/admin/emplcommute" element={<EmployeeCommuteManage />} />
                <Route path="/admin/commute" element={<CommuteManage />} />
                <Route path="/admin/fixworktime" element={<FixedWorkTimeManage />} />
                <Route path="/admin/dayoff" element={<DayOffManage />} />
                <Route path="/admin/premium" element={<PremiumManage />} />
                <Route path="/admin/employee/employeedetail" element={<EmployeeDetail />} />
                <Route path="/admin/employee/employeedetail/:id" element={<EmployeeDetail />} />
                <Route path="/admin/commute/commutedetail" element={<CommuteDetail />} />
                <Route path="/admin/device/devicedetail" element={<DeviceDetail />} />
                <Route path="/admin/dummy" element={<Dummypage />} />
                <Route path="/admin/doc" element={<DocApprovalPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </IconMappingContext.Provider>
          </MenuItemsContext.Provider>
        </UserRoleContext.Provider>

        {/* user 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="user">
          <MenuItemsContext.Provider value={userMenuItems}>
            <IconMappingContext.Provider value={userIconMapping}>
              <Routes>
                {/* (사용자 권한) user메뉴 페이지 라우팅 */}
                <Route path="/user/employee" element={<EmployeeManage />} />
                <Route path="/user/payrollmanage" element={<PayrollManage />} />
                <Route path="/user/employeefamilycheck" element={<EmployeeFamilyCheck />} />
                <Route path="/user/employeeinfocheck" element={<EmployeeInfoCheck />} />
                <Route path="/user/userdocsubmit" element={<UserDocSubmit />} />
                <Route path="/user/vacation" element={<VacationUseStatus />} />
                <Route path="/user/vacation/vacationform" element={<VacationForm />} />
                <Route path="/user/businesstrip" element={<BusinessTripStatus />} />
                <Route path="/user/businesstrip/businesstripform" element={<BusinessTripForm />} />
                <Route path="/user/overtimework/overtimeworkform" element={<OvertimeWorkForm />} />
                <Route path="/user/leavework/leaveworkform" element={<LeaveWorkForm />} />
                <Route path="/user/annualusestatus" element={<AnnualUseStatus />} />
                <Route path="/user/userattendancecheck" element={<UserAttendanceCheck />} />
                <Route path="/user/attendance" element={<AttendanceManage />} />
                <Route path="/user/userattendance" element={<UserAttendance />} />
                <Route path="/user/emplcommute" element={<EmployeeCommuteManage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </IconMappingContext.Provider>
          </MenuItemsContext.Provider>
        </UserRoleContext.Provider>

      </Router>

    </>
  );
}

export default App;