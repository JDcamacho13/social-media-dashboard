import React from 'react';
import '../styles/Card.css';

export const Card = ({
    children,
    username,
    followers,
    socialMedia,
    nameOfFollowers,
}) => {
    return (
        <div className={`cart ${socialMedia}`}>
            <div className="cart-content">
                <div className="cart-content-username">
                    {children}
                    <p>{username}</p>
                </div>
                <h3 className="cart-numbers-followers">{followers}</h3>
                <p className="cart-followers">{nameOfFollowers}</p>
            </div>
            {socialMedia === 'instagram' && (
                <svg aria-hidden="true" focusable="false">
                    <linearGradient id="my-cool-gradient" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fdc468" />
                        <stop offset="100%" stopColor="#df4996" />
                    </linearGradient>
                </svg>
            )}
        </div>
    );
};
