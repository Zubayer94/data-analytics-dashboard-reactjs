import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Dashboard from '../pages/Dashboard'
import Test from '../pages/Test'
import Login from '../pages/Login'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes