import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BackToTop = () => {
    const [backTop, setBackTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                setBackTop(true);
            } else {
                setBackTop(false);
            }
        });
    }, []);

    const handleBackTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <Link onClick={handleBackTop} className={`to-top ${backTop ? 'active' : ''}`}>
            <i className="to-top-icon bx bxs-chevron-up"></i>
        </Link>
    );
};

export default BackToTop;
