import React from 'react';
import './GetInTouchPage.css';
import costomer from '../assets/logo/costomer.png';

function GetInTouchPage() {
    const handleSupportClick = () => {
        window.location.href = 'https://a2dpcfactory.freshdesk.com/support/home';
    };

    return (
        <div className="get-in-touch-container">
            <div className="text-content">
                <h1 className="title">Get in Touch</h1>
                <p className="description">
                    We're here to assist you! Submit a support ticket, and our dedicated team will promptly address your concerns and provide the help you need.
                </p>
                <button className="support-button" onClick={handleSupportClick}>Get Support</button>
            </div>
            <img src={costomer} alt="Support" className="support" />
            <p>Computers for Everyone. Desktops, Workstations, Servers, PCs & Gaming Rigs</p>
        </div>
    );
}

export default GetInTouchPage;
