import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppFooter from './components/AppFooter';
import AppNavbar from './components/AppNavbar';
import AppSidebar from './components/AppSidebar';
import Dashboard from './pages/Dashboard'
import ImportXL from './pages/ImportXL';
import Test from './pages/Test';

function App() {
  return (
    <div className="wrapper">
      <AppNavbar />
      <AppSidebar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/import" element={<ImportXL />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
      
      <AppFooter />

    </div>
  );
}

export default App;
