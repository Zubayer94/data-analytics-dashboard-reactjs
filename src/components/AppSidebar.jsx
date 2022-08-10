import React, { useEffect } from 'react'
import $ from "jquery";

function AppSidebar() {
    useEffect(() => {
        // $('body').Layout();
        //   $('[data-toggle="push-menu"]').PushMenu();
        //   $('[data-widget="treeview"]').Treeview('init');
    }, [])
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="../../index3.html" className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <a href="../gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Home
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Import
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    )
}

export default AppSidebar