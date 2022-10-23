import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchContainer from '~/components/SearchContainer';

const SearchPage = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!params.get('from') || !params.get('to')) return navigate('/');
    }, []);
    return (
        <>
            <SearchContainer />
        </>
    );
};

export default SearchPage;
