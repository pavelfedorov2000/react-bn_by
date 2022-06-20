import classNames from 'classnames';
import React from 'react';

function Nav({ steps, currentStep }) {
    return (
        <div className="form__nav">
            {steps.map(step => (
                <button key={step.id} type="button" data-step={step.name} className={classNames('form__nav-btn', {
                    'active': step.id == currentStep
                })}>{step.title}</button>
            ))}
        </div>
    );
}

export default Nav;