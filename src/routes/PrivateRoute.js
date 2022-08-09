import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter';

const PrivateRoute = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    
    return (
        <div className="wrapper">
            <AppNavbar />
            <AppSidebar />
            
            {isLoggedIn ? <Outlet /> : <Navigate to='/login'  /> }

            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
            <AppFooter />

        </div>
    );
};

export default PrivateRoute;
