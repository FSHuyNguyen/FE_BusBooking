import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: null,
        notify: {
            title: '',
            msg: {},
            status: '',
        },
    },
    reducers: {
        removeNotify: (state) => {
            state.notify = {
                title: '',
                msg: {},
                status: '',
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                switch (action.payload.status) {
                    case 200:
                        state.loading = false;
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        break;
                    default:
                        state.loading = false;
                        state.isAuthenticated = false;
                        state.notify = {
                            title: 'error',
                            msg: action.payload.msg,
                            status: action.payload.status,
                        };
                }
            });
    },
});

const registerUser = createAsyncThunk('auth/register', async (data) => {
    try {
        const res = await axios.post(
            process.env.REACT_APP_BASE_URL + '/auth/register',
            {
                name: data.name,
                email: data.email,
                password: data.password,
                reenter_password: data.reenter_password,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        if (res.data.status === 200) {
            localStorage.setItem('TOKEN', res.data.token);
        }
        return res.data;
    } catch (error) {
        return error.response.data;
    }
});

const loginUser = createAsyncThunk('auth/login', async (data) => {
    try {
    } catch {}
});

export { registerUser };
export default authSlice;
