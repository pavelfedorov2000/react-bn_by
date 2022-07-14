import classNames from 'classnames';
import React from 'react';

function Help({ className }) {
    return (
        <div className={classNames('help', className)}>
            <div className="help__title">Нужна помощь?</div>
            <a href="tel:174" className="help__call">
                <img className="help__icon" src="img/call.svg" alt="иконка телефона" />
                <b>174</b>
            </a>
        </div>
    );
}

export default Help;