import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authAdminSlice = createSlice({
    name: 'authAdmin',
    initialState: {
        loading: false,
        isAuthenticated: false,
        admin: null,
        notify: {
            title: null,
            msg: {},
            status: null,
        },
    },
    reducers: {
        removeNotify: (state) => {
            state.notify = {
                title: null,
                msg: {
                    error: '',
                },
                status: null,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.admin = action.payload.admin;
                        break;
                    default:
                        state.isAuthenticated = false;
                        if (typeof action.payload.msg === 'object') {
                            state.notify = {
                                title: 'error',
                                msg: {
                                    ...action.payload.msg,
                                },
                                status: action.payload.status,
                            };
                        } else {
                            state.notify = {
                                title: 'error',
                                msg: {
                                    error: action.payload.msg,
                                },
                                status: action.payload.status,
                            };
                        }
                }
            })
            .addCase(getAdmin.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAdmin.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.admin = action.payload.user;
                        break;
                    default:
                        state.isAuthenticated = false;
                }
            })
            .addCase(logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = false;
                        state.admin = null;
                        break;
                    default:
                }
            });
    },
});

const loginAdmin = createAsyncThunk('auth/admin-login', async (data) => {
    try {
        const res = await axios.post(
            process.env.REACT_APP_BASE_URL + '/auth/admin-login',
            {
                email: data.email,
                password: data.password,
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

const getAdmin = createAsyncThunk('auth/getadmin', async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    if (!localStorage.getItem('TOKEN')) {
        return {
            status: 401,
            msg: 'No token',
        };
    }
    const bearerToken = () => `Bearer ${localStorage.getItem('TOKEN')}`;

    try {
        const res = await axios.get(baseURL + '/auth/getuserbytoken', {
            headers: { Authorization: bearerToken() },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
});

const logout = createAsyncThunk('auth/logout', async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    if (!localStorage.getItem('TOKEN'))
        return {
            status: 401,
            msg: 'No token',
        };
    const bearerToken = () => `Bearer ${localStorage.getItem('TOKEN')}`;

    try {
        const res = await axios.post(
            baseURL + '/auth/logout',
            {},
            {
                headers: { Authorization: bearerToken() },
            },
        );
        if (res.data.status === 200) {
            localStorage.removeItem('TOKEN');
        }
        return res.data;
    } catch (error) {}
});

export { loginAdmin, getAdmin, logout };
export default authAdminSlice;
