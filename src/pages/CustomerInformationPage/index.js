import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomerInformation from '~/components/CustomerInformation';

const CustomerInformationPage = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!params.get('from') || !params.get('to')) return navigate('/');
    }, []);
    return (
        <>
            <CustomerInformation />;
        </>
    );
};

export default CustomerInformationPage;
