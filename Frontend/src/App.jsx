import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectedRouteWrapper from './pages/UserProtectedRouteWrapper';
import CaptainProtectedRouteWrapper from './pages/CaptainProtectedRouteWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/captainLogout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={<UserProtectedRouteWrapper> <Home /> </UserProtectedRouteWrapper>} />
        <Route path='/user/logout' element={<UserProtectedRouteWrapper> <UserLogout /> </UserProtectedRouteWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectedRouteWrapper> <CaptainHome /> </CaptainProtectedRouteWrapper>} />
        <Route path='/captain/logout' element={<CaptainProtectedRouteWrapper> <CaptainLogout /> </CaptainProtectedRouteWrapper>} />
      </Routes>

    </>
  )
}

export default App
