import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import {FaUserCircle} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineLogin, AiOutlineLogout, AiFillHome } from 'react-icons/ai';
import Dropdown from "../../../components/Dropdown/Dropdown";
import { RiUserSettingsLine, RiGroup2Fill, } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";

const MobileNav = styled.div`
  display: flex;
  font-size: 0.8em;
  color:  ${({theme}) => theme.colors.blue090};
`

const SUserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  padding: 0px 1.5em;
  gap: 0.3em;

  font-size: 0.5em;
`

const SUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const SCompanyName = styled.div`
  width: 40%;
  padding: 20px;
  font-weight: 800;
  font-size: 0.8em;
  position: flxed;
`

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
  min-height: calc(100vh - 120px);
  background-color: ${({theme}) => theme.colors.blue010}

`

const SContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height:100%;
  margin: 5% 0;

  overflow: hidden;

`


const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30%;
`

const SSubHeader = styled.div`
  font-size: 1.5em;
  padding: 1em;
  color: gray;
`
const SHeader = styled.div`
  font-size: 7.5vw;
  font-weight: 900;
  padding: 0.5em;
`

const SLoginContainer = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 2em;
  padding: 1em;
  margin-top: 1em;
`

const SCommuteButton = styled.button`
  display: flex;
  // position: relative;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  width: 3em;
  height: 3em;
  min-width: 3em;
  min-height: 3em;
  font-size: 1.5em;

  color: white;
  background-color: #92F26D;
  border-radius: 50%;
  margin: 0 0.5em 0 0;
  border: none;
`

const SCommuteButtonLabel = styled.span`
display: flex;
justify-content: flex-start;
align-items: center;
width: 85%;
height: 50%;
padding: 0.6em;
background-color: ${({theme}) => theme.colors.blue010};
border-radius: 2em;

span {
  font-size: 0.8em;
  font-weight: 800;
  padding: 0 0.2em;
}
`

const SLeaveButton = styled(SCommuteButton)`
background-color: #FB4173;

`
const SLeaveButtonLabel = styled(SCommuteButtonLabel)`


`

const SNoticeContainer = styled.div`


`
const SClockContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.2em;
div {
  padding: 0.5em 0;
  gap: 0.5em;
}
`

const SAttendanceCheckContainer = styled.div`

  width: 100%;
  margin: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: ${(props)=> props.position};
  left: 0;
  bottom: 0;

  width: 100%;
  height: 6vh;
  padding: 10px;

  background-color: rgb(247, 247, 247);

`
const SFooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: rgb(127, 127, 127);


& > div {
  padding: 0 0.5em;
  font-size: 0.7em;
  font-weight: 800;
}

`




const UserAttendanceCheck = () => {

  
  // 출근,퇴근시간 기록을 위한 상태변수
  const [attendanceTime, setAttendanceTime] = useState(null);
  const [leaveTime, setLeaveTime] = useState(null);

  //출근 버튼과 퇴근 버튼을 클릭했을 때 
  // 해당 버튼에 맞는 시간을 상태 변수에 저장하는 이벤트핸들러
  const handleAttendance = async () => {
    const isBeaconDetected = await connectToBeacon();
    if (isBeaconDetected) {
      const currentTime = new Date();
      setAttendanceTime(currentTime);
    } else {
      alert("근처에 출근을 인증할 수 있는 비콘을 찾을 수 없습니다.");
    }
  };
  
  const handleLeave = () => {
    const currentTime = new Date();
    setLeaveTime(currentTime);
  };

  const [date, setDate] = useState(new Date());
  
  const Clock = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);

    return (
      <SClockContainer>
        <div>{dateString}</div>
        <h2>{date.toLocaleTimeString()}</h2>
      </SClockContainer>
    );
  };
    
      useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
    
        return () => {
          clearInterval(timerID);
        };
      }, []);
    
      const tick = () => {
        setDate(new Date());
      };
    
//드롭다운메뉴 현시 코드
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  const navigate = useNavigate();

  const userIconMapping = {
    0: RiUserSettingsLine,
    1: RiGroup2Fill,
    2: ImProfile,
    3: MdLibraryBooks,
  };
  
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
      content: ["휴가신청서", "출장신청서"],
      innerLink: ["/user/vacation/vacationform", "/user/businesstrip/businesstripform"],
    },
  ];

  const connectToBeacon = async () => {
    return new Promise((resolve) => {
      navigator.bluetooth.requestLEScan({
        filters: [{ services: ['e2c56db5-dffb-48d2-b060-d0f5a71096e0'] }],
        keepRepeatedDevices: true
      })
      .then(() => {
        console.log('스캔 시작...');
        
        // 이벤트 리스너 추가
        navigator.bluetooth.addEventListener('advertisementreceived', event => {
          console.log('발견된 장치:', event.device, '신호 강도:', event.rssi);
          
          // 신호 강도가 일정 수준 이상이면 출근으로 인식
          if (event.rssi > -70) {
            navigator.bluetooth.stopLEScan(); // 스캔 중지
            resolve(true);
          }
        });
        
        // 10초 후에 스캔 중지
        setTimeout(() => {
          navigator.bluetooth.stopLEScan();
          resolve(false);
        }, 10000);
      })
      .catch(error => {
        console.log('스캔 오류:', error);
        resolve(false);
      });
    });
  };
  


  return (
    <>
    <MobileNav>
      <SCompanyName>
        <AiFillHome size={20} onClick={navigate}/>
      </SCompanyName>
      <SUserWrapper>
          <SUserInfo>
            <FaUserCircle size={20} onClick={toggleDropdown}/>
            {isDropdownOpen && <Dropdown menuItems={['개인정보', '비밀번호변경', '로그아웃']} />}
            <GiHamburgerMenu size={20}/>
          </SUserInfo>
      </SUserWrapper>
    </MobileNav>
    
    <SContainer>
      <SContentWrapper>
        <SHeaderContainer>
          <SSubHeader>Payroll Automatic System</SSubHeader>
          <SHeader>비콘 근태</SHeader>
        </SHeaderContainer>
        <SNoticeContainer>
            <SClockContainer>
              <Clock />
            </SClockContainer>
        </SNoticeContainer>
        <SLoginContainer>
        <SAttendanceCheckContainer>
            <SCommuteButtonLabel>
              <span>
                <SCommuteButton onClick={connectToBeacon}>
                <AiOutlineLogin size={40}/>
                </SCommuteButton>
              </span>
              <span>출근하기</span>
              <span>{attendanceTime ? attendanceTime.toLocaleTimeString() : '00:00'}</span>
            </SCommuteButtonLabel>
          </SAttendanceCheckContainer>
          <SAttendanceCheckContainer>
            <SLeaveButtonLabel>
              <span>
                <SLeaveButton onClick={handleLeave}>
                <AiOutlineLogout size={40}/>
                </SLeaveButton>
              </span>
              <span>퇴근하기</span>
              <span>{leaveTime ? leaveTime.toLocaleTimeString() : '00:00'}</span>
            </SLeaveButtonLabel>
          </SAttendanceCheckContainer>
        </SLoginContainer>
      </SContentWrapper>
      <SFooterWrapper position='fixed'>
        <SFooterContainer>
          <div>고객센터 0000 - 0000</div>
        </SFooterContainer>
      </SFooterWrapper>
    </SContainer>
    </>
  )


}

export default UserAttendanceCheck;