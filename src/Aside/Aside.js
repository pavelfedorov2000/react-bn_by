import React from 'react';
import AsideText from '../AsideText/AsideText';
import Help from '../Help/Help';

function Aside({ currentStep }) {
    return (
        <div className="form-page__aside">
            <h1 className="form-page__title">Заявление на подключение</h1>
            <AsideText currentStep={currentStep} />
            <Help className="form-page__aside-help" />
        </div>
    );
}

export default Aside;