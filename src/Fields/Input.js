import React, { useState } from 'react';
import classNames from 'classnames';
import ReactInputMask from 'react-input-mask';
import validator from 'react-validation';

function Input({ name, type, mask, placeholder, valid, fieldsetName, isToggle, value, onChangeField, inputType, textfield }) {

    const [inputValue, setInputValue] = useState(value || localStorage.getItem(name));

    const handleChangeInput = (e) => {
        onChangeField(e, inputValue, setInputValue);
    }

    return (
        <>
            {
                mask ?
                    <ReactInputMask value={inputValue} onChange={handleChangeInput} name={name} type={type ? type : 'text'} mask={mask && mask} placeholder={placeholder && placeholder} className={classNames('input', {
                        'error': valid === false
                    })} />
                    :
                    <>
                        {textfield ?
                            <textarea value={inputValue} onChange={handleChangeInput} className="input textarea" name={`${isToggle && fieldsetName}_${name}`} placeholder={placeholder}></textarea>
                            :
                            <input value={inputValue} onChange={handleChangeInput} name={isToggle ? `${fieldsetName}${name.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('')}` : name} type={type ? type : 'text'} placeholder={placeholder && placeholder} className={classNames('input', {
                                'error': valid === false
                            })} />
                        }
                    </>
            }
        </>
    );
}

export default Input;