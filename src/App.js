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
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* admin 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="admin">
          <MenuItemsContext.Provider value={managerMenuItems}>
            <IconMappingContext.Provider value={managerIconMapping}>
              <Routes>
                {/* (관리자 권한) admin 메뉴 페이지 라우팅 */}
                <Route path="/login" element={<Login />} />
                <Route path="/admin/depart" element={<DepartmentManage />} />
                <Route path="/admin/employee" element={<EmployeeManage />} />
                <Route path="/admin/employeelist" element={<EmployeeListManage />} />
                <Route path="/admin/retirelist" element={<RetiredEmployeeListManage />} />
                <Route path="/admin/annual" element={<AnnualManage />} />
                <Route path="/admin/attendance" element={<AttendanceManage />} />
                <Route path="/admin/defaultworktime" element={<WorkTimeManage />} />
                <Route path="/admin/payrollmanage" element={<PayrollManage />} />
                <Route path="/admin/payrollcheck" element={<PayrollCheck />} />
                <Route path="/admin/ratemanage" element={<RateManage />} />
                <Route path="/admin/transferhistory" element={<TransferHistory />} />
                <Route path="/admin/departins" element={<DepartureInsurance />} />
                <Route path="/admin/retire" element={<RetirePension />} />
                <Route path="/admin/insurunce" element={<InsuranceClaim />} />
                <Route path="/admin/device" element={<DeviceManage />} />
                <Route path="/admin/emplcommute" element={<EmployeeCommuteManage />} />
                <Route path="/admin/commute" element={<CommuteManage />} />
                <Route path="/admin/fixworktime" element={<FixedWorkTimeManage />} />
                <Route path="/admin/dayoff" element={<DayOffManage />} />
                <Route path="/admin/premium" element={<PremiumManage />} />

                <Route path="/admin/employee/employeedetail" element={<EmployeeDetail />} />
                <Route path="/admin/employee/employeedetail/:id" element={<EmployeeDetail />} />
                <Route path="/admin/commute/commutedetail" element={<CommuteDetail />} />
                <Route path="/admin/device/devicedetail" element={<DeviceDetail />} />

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
                <Route path="/user/employeefamilycheck" element={<EmployeeFamilyCheck />} />
                <Route path="/user/employeeinfocheck" element={<EmployeeInfoCheck />} />

                <Route path="/user/userattendance" element={<UserAttendance />} />

                {/* 자신의 신청서 조회 / 작성 */}
                <Route path="/user/userdocsubmit" element={<UserDocSubmit />} />

                <Route path="/user/vacation" element={<VacationUseStatus />} />
                <Route path="/user/vacation/vacationform" element={<VacationForm />} />

                <Route path="/user/businesstrip" element={<BusinessTripStatus />} />
                <Route path="/user/businesstrip/businesstripform" element={<BusinessTripForm />} />

                <Route path="/user/overtimework/overtimeworkform" element={<OvertimeWorkForm />} />
                <Route path="/user/leavework/leaveworkform" element={<LeaveWorkForm />} />


                <Route path="/user/annualusestatus" element={<AnnualUseStatus />} />

                <Route path="/user/userattendancecheck" element={<UserAttendanceCheck />} />
                {/* 사용자 자신의 근태기록 조회 */}
                <Route path="/user/userattendance" element={<UserAttendance />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </IconMappingContext.Provider>
          </MenuItemsContext.Provider>
        </UserRoleContext.Provider>

        {/* superadmin 결재권자 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="superadmin">
          <MenuItemsContext.Provider value={superadminMenuItems}>
            <IconMappingContext.Provider value={superadminIconMapping}>
              <Routes>
                {/* 결재권자가 사용자의 신청서 조회 / 승인 */}
                <Route path="/superadmin/doc" element={<DocApprovalPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </IconMappingContext.Provider>
          </MenuItemsContext.Provider>
        </UserRoleContext.Provider>

        {/* operator 권한용 컨텍스트 제공 */}
        <UserRoleContext.Provider value="operator">
          <MenuItemsContext.Provider value={operatorMenuItems}>
            <IconMappingContext.Provider value={operatorIconMapping}>
              <Routes>
                {/* (운영자 권한) operator메뉴 페이지 라우팅 */}
                <Route path="/operator/operatorinfo" element={<OperatorInfoManage />} />
                <Route path="/operator/com" element={<CompanyManage />} />
                <Route path="/operator/com/:companyId" element={<CompanyDetail />} />

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