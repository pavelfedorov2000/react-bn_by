import React from 'react';

function Button({ onClick, className, border, text }) {
  return (
    <button
      onClick={onClick}
      className={classNames('btn', className, {
        'btn--border': border,
      })}>
      {text}
    </button>
  );
}

export default Button;