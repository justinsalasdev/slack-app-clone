import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as axios from '../utils/axiosApi'
import * as storage from '../utils/storage'
export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (payload) => {
    const data = await axios.post('auth/sign_in', payload).then((res) => {
      // console.log(res.data)
      return { ...res.data, success: true }
    }).catch((err) => {
      return { success: false }
    })
    return { ...data }
  }
)

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuth: false,
    isErrorMessage: false,
    authId: null
  },
  reducers: {
    clearState(state, action) {
      state.isErrorMessage = false
      state.isAuth = false
      state.authId = null
      return state
    },
    getUser(state, action) {
      state.user = storage.get(storage.AUTH_KEY)
      if (state.user !== null) {
        state.isAuth = true
        state.authId = state.user.id
      } else {
        state.isAuth = false
        state.authId = null
      }
    }
  },
  extraReducers: {
    [loginAsync.pending]: (state, action) => {
    },
    [loginAsync.fulfilled]: (state, action) => {
      // console.log(action)
      state.user = action.payload.data
      if (action.payload.success) {
        state.isErrorMessage = false
        state.isAuth = true
        state.authId = action.payload.data.id
        state.user = action.payload.data
        storage.save(storage.AUTH_KEY, state.user)
      } else {
        state.isAuth = false
        state.authId = null
        state.user = null
        state.isErrorMessage = true
      }

    },
  }
})

export const { clearState, getUser } = AuthSlice.actions

export default AuthSlice.reducer