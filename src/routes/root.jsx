import React from 'react';
import './root.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
function Root() {
    return (
        <div className="app">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Root;