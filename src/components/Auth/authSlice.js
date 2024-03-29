import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        modalToggle: false,
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
        modalToggle: (state, action) => {
            state.modalToggle = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        break;
                    default:
                        state.isAuthenticated = false;
                        state.notify = {
                            title: 'error',
                            msg: action.payload.msg,
                            status: action.payload.status,
                        };
                }
            })
            .addCase(getUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        break;
                    default:
                        state.isAuthenticated = false;
                }
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
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
            .addCase(logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = false;
                        state.user = null;
                        break;
                    default:
                }
            })
            .addCase(loginUserByGoogle.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUserByGoogle.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        break;
                    default:
                }
            })
            .addCase(loginUserByFacebook.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUserByFacebook.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.status) {
                    case 200:
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        break;
                    default:
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

const getUser = createAsyncThunk('auth/getuser', async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    if (!localStorage.getItem('TOKEN'))
        return {
            status: 401,
            msg: 'No token',
        };
    const bearerToken = () => `Bearer ${localStorage.getItem('TOKEN')}`;

    try {
        const res = await axios.get(baseURL + '/auth/getuserbytoken', {
            headers: { Authorization: bearerToken() },
        });

        return res.data;
    } catch (error) {}
});

const loginUser = createAsyncThunk('auth/login', async (data) => {
    try {
        const res = await axios.post(
            process.env.REACT_APP_BASE_URL + '/auth/login',
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

const loginUserByGoogle = createAsyncThunk('auth/login-by-google', async (location) => {
    if (!location)
        return {
            status: 401,
            msg: 'No location',
        };
    try {
        const res = await axios.get(process.env.REACT_APP_BASE_URL + `/callback${location}`);
        if (res.data.status === 200) {
            localStorage.setItem('TOKEN', res.data.token);
        }
        return res.data;
    } catch (error) {
        return error.response.data;
    }
});

const loginUserByFacebook = createAsyncThunk('auth/login-by-facebook', async (location) => {
    try {
        const res = await axios.get(process.env.REACT_APP_BASE_URL + `/auth/facebook/callback${location}`);
        if (res.data.status === 200) {
            localStorage.setItem('TOKEN', res.data.token);
        }
        return res.data;
    } catch (error) {
        return error.response.data;
    }
});

export { registerUser, getUser, loginUser, logout, loginUserByGoogle, loginUserByFacebook };
export default authSlice;
