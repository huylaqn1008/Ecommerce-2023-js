import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PagenotFound from './pages/PagenotFound'
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './components/routes/Private';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/*' element={<PagenotFound />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
