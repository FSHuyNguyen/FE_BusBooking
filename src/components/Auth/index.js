import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authSlice from './authSlice';
import Login from './Login';
import Register from './Register';
import '~/components/Auth/style.css';
import { disabledScroll, enabledScroll } from '~/utils/scrollBody';
import ForgotPassword from './ForgotPassword';

const Auth = ({ authOpen, onClose }) => {
    const dispatch = useDispatch();
    const [changeForm, setChangeForm] = useState(true);
    const [forgot, setForgot] = useState(false);
    const handleClose = () => {
        dispatch(authSlice.actions.removeNotify());
        setChangeForm(true);
        setForgot(false);
        onClose();
    };

    const handleChangForm = () => {
        if (changeForm) {
            setChangeForm(false);
            dispatch(authSlice.actions.removeNotify());
        } else {
            setChangeForm(true);
            dispatch(authSlice.actions.removeNotify());
        }
    };

    const renderForm = () => {
        if (forgot && authOpen) return <ForgotPassword onClose={handleClose} />;
        else if (changeForm && authOpen)
            return <Login onClose={handleClose} onForgot={setForgot} onChangeForm={handleChangForm} />;
        else if (!changeForm && authOpen) return <Register onClose={handleClose} onChangeForm={handleChangForm} />;
    };

    authOpen ? disabledScroll() : enabledScroll();

    return (
        <div id="forms" className={`modal ${authOpen ? '' : 'hidden'}`}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <section className="modal__body modal_forms">{renderForm()}</section>
        </div>
    );
};

export default Auth;
