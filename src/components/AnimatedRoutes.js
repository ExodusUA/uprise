import React, { Component } from 'react';
import Signup from '../pages/Signup';
import Board from '../pages/Board';
import Dashboard from '../pages/Dashboard';
import AuthCheck from '../hoc/AuthCheck';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    )
}

export default AnimatedRoutes;