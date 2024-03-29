import React, { useEffect } from 'react';
import SearchConfirmation from '~/components/SearchConfirmation';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchConfirmationPage = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!params.get('date') || !params.get('type')) return navigate('/');
    }, []);

    return (
        <>
            <SearchConfirmation />
        </>
    );
};

export default SearchConfirmationPage;
