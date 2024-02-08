import React from 'react';
import Footer from '../Footer/Footer.jsx';

export default function Layout({ children }) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}
