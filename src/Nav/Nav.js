import classNames from 'classnames';
import React, { useContext } from 'react';
import { FormContext } from '../context';

function Nav({ showStep }) {

    const { formData, currentStep } = useContext(FormContext);

    //const nav = document.querySelector('.form__nav');
    //const navWidth = nav.scrollWidth;

    return (
        <div className="form__nav">
            {formData.map((step, i) => (
                <button onClick={() => showStep(i)} key={step.id} type="button" data-step={step.name} className={classNames('form__nav-btn', {
                    'active': step.id == currentStep
                })}>{step.title}</button>
            ))}
        </div>
    );
}

export default Nav;