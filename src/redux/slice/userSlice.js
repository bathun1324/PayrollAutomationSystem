import {createSlice} from '@reduxjs/toolkit';


export const initialUserInfos = {
  userId: -1,
  userStatus: "",
  userRole: "admin",
  email: "",
  image: "",
}

export const initialUser = {
  loginStatus: false,
  keepLoggedIn: false,
  locationPermission: false,
  userInfos: initialUserInfos,
  accessToken: "",
  refreshToken: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    userSearch: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    }, // 여기서 누락된 세미콜론 추가
    logInUser: (state, { payload }) => {
      const { accessToken, refreshToken, keepLoggedIn } = payload;

      if (keepLoggedIn) {
        state.keepLoggedIn = true;
      }
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.loginStatus = true;
    },
    renewUserTokens: (state, { payload }) => {
      const { accessToken, refreshToken } = payload;

      if (accessToken) {
        state.accessToken = accessToken;
      }
      if (refreshToken) {
        state.refreshToken = refreshToken;
      }
    },
    logOutUser: () => {
      return initialUser;
    },
  },
});
