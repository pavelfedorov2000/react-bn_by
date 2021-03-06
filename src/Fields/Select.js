import React, { useState } from 'react';
import classNames from 'classnames';
import SlideToggle from "react-slide-toggle";
import Option from './Option';

function Select({ name, isToggle, options, fieldsetName, id, onChangeField }) {

    //console.log(options);
    const storageValue = localStorage.getItem(name);
    console.log(storageValue);
    const [selectTitle, setSelectTitle] = useState(storageValue || options[0].title);
    const [toggleSelect, setToggleSelect] = useState(false);

    return (
        <div className={classNames('select', {
            'select--price': name === 'tariff'
        })}>
            <div className="select__title" onClick={() => setToggleSelect(!toggleSelect)}>
                <span className={name === 'tariff' ? `${name}-name` : null}>{selectTitle}</span>
                {name === 'tariff' && <span className={`${name}-price`}></span>}
            </div>
            {toggleSelect &&
                <div className="select__content">
                    <div className="select__content-inner">
                        {options.map((option, i) => (
                            <Option id={id} options={options} option={option} i={i} name={name} isToggle={isToggle} fieldsetName={fieldsetName} setSelectTitle={setSelectTitle} onChangeField={onChangeField} setToggleSelect={setToggleSelect} />
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default Select;

