import classNames from 'classnames';
import React from 'react';

function Button({ onClick, className, border, text, type, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={classNames('btn', className, {
                'btn--border': border,
            })}>
            {text}
        </button>
    );
}

export default Button;