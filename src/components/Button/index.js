import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Style = ['search-btn', 'btn__remove'];

const Size = ['btn--medium', 'btn--small', 'btn--large'];

function Button({ children, version, onClick, buttonStyle, buttonSize, type, isDisabled, to, href, ...passProps }) {
    const checkButtonStyle = Size.includes(buttonStyle) ? Style[0] : buttonStyle;

    const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];

    const props = {
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else {
        props.onClick = onClick;
    }

    return (
        <Comp
            type={type}
            disabled={isDisabled}
            className={`btn
        btn--${version} ${checkButtonStyle} ${checkButtonSize}`}
            {...props}
        >
            {children}
        </Comp>
    );
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
