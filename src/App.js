import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import '~/assets/css/base.css';
import '~/assets/css/style.css';
import '~/assets/css/modal.css';
import '~/assets/css/slideshow.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/HomePage';
import SearchPage from './pages/SearchPage';

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
            </Routes>
        </Router>
    );
}

export default App;
