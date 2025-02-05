import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import theme from './theme';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BusSchedule from './pages/BusSchedule';
import Checkout from './pages/Checkout';
import Demopage from './pages/DemoPage/demopage';
import UserProtectedRoute from './components/ProtectedRoutes';
import {Toaster} from 'react-hot-toast';
import Admin from './pages/Admin';

function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <ValidateAuth />
        <CssBaseline />
        <Box margin={{xs: '1rem', md: '3rem 5rem'}}>
          {!location.pathname.startsWith('/admin') && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/google" element={<GoogleAuthLogin />} />
            <Route path="/bus-schedule" element={<BusSchedule />} />
            <Route
              path="/checkout"
              element={
                <UserProtectedRoute>
                  <Checkout />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <UserProtectedRoute>
                  <Admin />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/demo-Page"
              element={
                <UserProtectedRoute>
                  <Demopage />
                </UserProtectedRoute>
              }
            />
          </Routes>
          {!location.pathname.startsWith('/admin') && <Footer />}
        </Box>
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
