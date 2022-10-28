import '~/assets/css/base.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchConfirmationPage from './pages/SearchConfirmationPage';
import PaymentPage from './pages/PaymentPage';
import CustomerInformationPage from './pages/CustomerInformationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <MainLayout>
                            <SearchPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/search-confirmation"
                    element={
                        <MainLayout>
                            <SearchConfirmationPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/customer-information"
                    element={
                        <MainLayout>
                            <CustomerInformationPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <MainLayout>
                            <PaymentPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
