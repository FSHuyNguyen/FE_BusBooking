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
import AdminTripPage from './pages/AdminTripPage';
import AdminCreateTripPage from './pages/AdminCreateTripPage';
import AdminUpdateTripPage from './pages/AdminUpdateTripPage';
import AdminStationPage from './pages/AdminStationPage';
import AdminCreateStationPage from './pages/AdminCreateStationPage';
import AdminUpdateStationPage from './pages/AdminUpdateStationPage';
import AdminDriverPage from './pages/AdminDriverPage';
import AdminCreateDriverPage from './pages/AdminCreateDriverPage';
import AdminUpdateDriverPage from './pages/AdminUpdateDriverPage';
import AdminTypeBusPage from './pages/AdminTypeBusPage';
import AdminCreateTypeBusPage from './pages/AdminCreateTypeBusPage';
import AdminUpdateTypeBusPage from './pages/AdminUpdateTypeBusPage';
import AdminBusPage from './pages/AdminBusPage';
import AdminCreateBusPage from './pages/AdminCreateBusPage';
import AdminUpdateBusPage from './pages/AdminUpdateBusPage';
import AdminPricePage from './pages/AdminPricePage';
import AdminCreatePricePage from './pages/AdminCreatePricePage';
import AdminUpdatePricePage from './pages/AdminUpdatePricePage';
import OrderPage from './pages/OrderPage';

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
                <Route
                    path="/admin-trip"
                    element={
                        <AdminLayout>
                            <AdminTripPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-trip"
                    element={
                        <AdminLayout>
                            <AdminCreateTripPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-trip"
                    element={
                        <AdminLayout>
                            <AdminUpdateTripPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-station"
                    element={
                        <AdminLayout>
                            <AdminStationPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-station"
                    element={
                        <AdminLayout>
                            <AdminCreateStationPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-station"
                    element={
                        <AdminLayout>
                            <AdminUpdateStationPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-driver"
                    element={
                        <AdminLayout>
                            <AdminDriverPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-driver"
                    element={
                        <AdminLayout>
                            <AdminCreateDriverPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-driver"
                    element={
                        <AdminLayout>
                            <AdminUpdateDriverPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-typebus"
                    element={
                        <AdminLayout>
                            <AdminTypeBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-typebus"
                    element={
                        <AdminLayout>
                            <AdminCreateTypeBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-typebus"
                    element={
                        <AdminLayout>
                            <AdminUpdateTypeBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-bus"
                    element={
                        <AdminLayout>
                            <AdminBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-bus"
                    element={
                        <AdminLayout>
                            <AdminCreateBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-bus"
                    element={
                        <AdminLayout>
                            <AdminUpdateBusPage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-price"
                    element={
                        <AdminLayout>
                            <AdminPricePage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-create-price"
                    element={
                        <AdminLayout>
                            <AdminCreatePricePage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/admin-update-price"
                    element={
                        <AdminLayout>
                            <AdminUpdatePricePage />
                        </AdminLayout>
                    }
                />
                <Route
                    path="/order"
                    element={
                        <MainLayout>
                            <OrderPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
