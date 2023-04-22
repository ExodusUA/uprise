import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Board from './pages/Board';
import Dashboard from './pages/Dashboard';
import AuthCheck from './hoc/AuthCheck';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {

    return (
        <BrowserRouter basename='/' >
            <Routes>
                <Route exact path='/' element={
                    <AuthCheck>
                        <Board />
                    </AuthCheck>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/board' element={
                    <AuthCheck>
                        <Board />
                    </AuthCheck>
                } />
                <Route exact path='/dashboard/*' element={
                    <AuthCheck>
                        <Dashboard />
                    </AuthCheck>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
