import React from 'react';
import './_button.scss';
export default function Button({ onClick, label, className }) {
    return (
        <button onClick={onClick} className={className}>
            {label}
        </button>
        );
};
