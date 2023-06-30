import Notiflix from 'notiflix';
import React from 'react';

const notify = () => {
    Notiflix.Notify.init({
        width: '280px',
        position: 'right-top',
        distance: '30px',
        opacity: 1,
        borderRadius: '5px',
        rtl: false,
        timeout: 3000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        plainText: true,
        showOnlyTheLastOne: true,
        clickToClose: true,
        pauseOnHover: true,
        ID: 'NotiflixNotify',
        className: 'notiflix-notify',
        zindex: 999999,
        fontFamily: 'Quicksand',
        fontSize: '16px',
        cssAnimation: true,
        cssAnimationDuration: 500,
        cssAnimationStyle: 'from-right',
        closeButton: false,
        useIcon: false,
        useFontAwesome: false,
        fontAwesomeIconStyle: 'basic',
        fontAwesomeIconSize: '34px',
        success: {
            background: '#32c682',
            textColor: '#fff',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-check-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(50,198,130,0.2)',
        },
        failure: {
            background: '#ff5549',
            textColor: '#fff',
            childClassName: 'notiflix-notify-failure',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-times-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(255,85,73,0.2)',
        },
        warning: {
            background: '#eebf31',
            textColor: '#fff',
            childClassName: 'notiflix-notify-warning',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-exclamation-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(238,191,49,0.2)',
        },
        info: {
            background: '#26c0d3',
            textColor: '#fff',
            childClassName: 'notiflix-notify-info',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-info-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(38,192,211,0.2)',
        },
    });
    Notiflix.Confirm.init({
        className: 'notiflix-confirm',
        width: '300px',
        zindex: 999999,
        position: 'center',
        distance: '10px',
        backgroundColor: '#f8f8f8',
        borderRadius: '25px',
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        rtl: false,
        fontFamily: 'Quicksand',
        cssAnimation: true,
        cssAnimationDuration: 300,
        cssAnimationStyle: 'fade',
        plainText: true,
        titleColor: '#32c682',
        titleFontSize: '16px',
        titleMaxLength: 34,
        messageColor: '#1e1e1e',
        messageFontSize: '14px',
        messageMaxLength: 110,
        buttonsFontSize: '15px',
        buttonsMaxLength: 34,
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#32c682',
        cancelButtonColor: '#f8f8f8',
        cancelButtonBackground: '#a9a9a9',
    });
    Notiflix.Report.init({
        className: 'notiflix-report',
        width: '320px',
        backgroundColor: '#f8f8f8',
        borderRadius: '25px',
        rtl: false,
        zindex: 4002,
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        backOverlayClickToClose: false,
        fontFamily: 'Quicksand',
        svgSize: '110px',
        plainText: true,
        titleFontSize: '16px',
        titleMaxLength: 34,
        messageFontSize: '13px',
        messageMaxLength: 400,
        buttonFontSize: '14px',
        buttonMaxLength: 34,
        cssAnimation: true,
        cssAnimationDuration: 360,
        cssAnimationStyle: 'fade',
        success: {
            svgColor: '#32c682',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#32c682',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(50,198,130,0.2)',
        },
        failure: {
            svgColor: '#ff5549',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#ff5549',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(255,85,73,0.2)',
        },
        warning: {
            svgColor: '#eebf31',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#eebf31',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(238,191,49,0.2)',
        },
        info: {
            svgColor: '#26c0d3',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#26c0d3',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(38,192,211,0.2)',
        },
    });
    Notiflix.Loading.init({
        className: 'notiflix-loading',
        zindex: 4000,
        backgroundColor: 'rgba(0,0,0,0.8)',
        rtl: false,
        fontFamily: 'Quicksand',
        cssAnimation: true,
        cssAnimationDuration: 400,
        clickToClose: false,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: '80px',
        svgColor: '#32c682',
        messageID: 'NotiflixLoadingMessage',
        messageFontSize: '15px',
        messageMaxLength: 34,
        messageColor: '#dcdcdc',
    });
};

export default notify;
