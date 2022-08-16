import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="py-[30px] pb-60 container">{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
