import React from 'react';
import './_button.scss';

export default function Button({label, ...props}) {
    return (
        <button {...props}>
            {label}
        </button>
    );
};
