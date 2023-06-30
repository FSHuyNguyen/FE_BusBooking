import { configureStore } from '@reduxjs/toolkit';
import authSlice from '~/components/Auth/authSlice';
import authAdminSlice from '~/components/AuthAdmin/authAdminSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        authAdmin: authAdminSlice.reducer,
    },
});

export default store;
