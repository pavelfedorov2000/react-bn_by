import React from 'react';

function Help() {
    return (
        <div className="help @@block">
            <div className="help__title">Нужна помощь?</div>
            <a href="tel:174" className="help__call">
                <img className="help__icon" src="img/call.svg" alt="иконка телефона" />
                <b>174</b>
            </a>
        </div>
    );
}

export default Help;