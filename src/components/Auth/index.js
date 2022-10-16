import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authSlice from './authSlice';
import Login from './Login';
import Register from './Register';
import '~/components/Auth/style.css';
import { disabledScroll, enabledScroll } from '~/utils/scrollBody';

const Auth = ({ authOpen, onClose }) => {
    const dispatch = useDispatch();
    const [changeForm, setChangeForm] = useState(true);
    const handleClose = () => {
        dispatch(authSlice.actions.removeNotify());
        setChangeForm(true);
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

    authOpen ? disabledScroll() : enabledScroll();

    return (
        <div id="forms" className={`modal ${authOpen ? '' : 'hidden'}`}>
            <div className="modal__overlay" onClick={handleClose}></div>
            <section className="modal__body modal_forms">
                {changeForm && authOpen ? (
                    <Login onClose={handleClose} onChangeForm={handleChangForm} />
                ) : (
                    <Register onClose={handleClose} onChangeForm={handleChangForm} />
                )}
            </section>
        </div>
    );
};

export default Auth;
