import styled from "styled-components";
import AppSidebar from "../../components/SideNav/AppSidebar";
import React, { useState, useContext, useEffect } from "react";
import { UserRoleContext, MenuItemsContext } from "../../App";
import { Header } from "../../components/Header";
import { DepartmentTable } from "../../components/Table/DepartmentTable";
import NewDepartModal from "../../components/Modal/NewDepartModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import axios from "axios";
import { Provider } from 'react-redux'

const DepartmentManage = () => {

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
      </div>
    </div>
  )

}

export default DepartmentManage;