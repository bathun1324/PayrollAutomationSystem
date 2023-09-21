import styled from "styled-components";
import AppSidebar from "../../components/SideNav/AppSidebar";
import { Header } from "../../components/Header";
import React from "react";

import { CContainer } from '@coreui/react'

const DepartmentManage = () => {

    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header />
                <div className="body flex-grow-1 px-3">
                    <CContainer lg>
                        <h2 className="gap-2 mb-4">임시페이지입니다.</h2>
                    </CContainer>
                </div>
            </div>
        </div >
    )

}

export default DepartmentManage;