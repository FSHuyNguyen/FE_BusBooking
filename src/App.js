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
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import AdminLayout from './layouts/AdminLayout';
import AuthAdminPage from './pages/AuthAdminPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminCustomerPage from './pages/AdminCustomerPage';
import AdminOrderPage from './pages/AdminOrderPage';
import notify from './utils/notiflixInit';

function App() {
    notify();
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
                <Route
                    path="/payment-success"
                    element={
                        <MainLayout>
                            <PaymentSuccessPage />
                        </MainLayout>
                    }
                />
                <Route path="/auth-admin" element={<AuthAdminPage />} />
                <Route
                    path="/admin-dashboard"
                    element={
                        <AdminLayout>
                            <AdminDashboardPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-customers"
                    element={
                        <AdminLayout>
                            <AdminCustomerPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-orders"
                    element={
                        <AdminLayout>
                            <AdminOrderPage />
                        </AdminLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
