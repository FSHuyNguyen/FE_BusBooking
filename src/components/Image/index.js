import React, { forwardRef } from 'react';

const Image = forwardRef(({ children, onClick, src, alt, defaultImg, className, ...passprops }, ref) => {
    const props = {
        ...passprops,
    };

    if (src) {
        props.src = src;
    } else {
        props.src = defaultImg;
    }

    return (
        <img ref={ref} alt={alt} onClick={onClick} className={className} {...props}>
            {children}
        </img>
    );
});

export default Image;
