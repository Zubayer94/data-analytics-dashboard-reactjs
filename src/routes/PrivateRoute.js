import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar'
import AppNavbar from '../components/AppNavbar'

const PrivateRoute = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    return (
        <div className="container-scroller">
            <AppSidebar />
            <div className="container-fluid page-body-wrapper">
                <AppNavbar />
                <div className="page-wrapper">
                    {isLoggedIn ? <Outlet /> : <Navigate to='/login'  /> }
                </div>
            </div>
        </div>
    );
};

export default PrivateRoute;
