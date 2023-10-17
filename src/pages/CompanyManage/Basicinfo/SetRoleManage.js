import styled from "styled-components";
import AppSidebar from "../../../components/SideNav/AppSidebar";
import { Header } from "../../../components/Header";
import React from "react";

import { CContainer } from '@coreui/react'

const SetRoleManage = () => {

    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header />
                <div className="body flex-grow-1 px-3">
                    <CContainer lg>
                        {/* CMM_CODE에서 직급정보를 수정및 추가한다 */}
                        <h2 className="gap-2 mb-4">SetRoleManage.</h2>
                    </CContainer>
                </div>
            </div>
        </div >
    )

}

export default SetRoleManage;