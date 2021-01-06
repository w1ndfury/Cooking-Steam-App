import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">          
            <p>&copy;{new Date().getFullYear()} Cooking STEAM</p>             
        </div>
    );
}

export default Footer