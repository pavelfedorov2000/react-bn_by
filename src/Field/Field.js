import React, { useState } from 'react';
import classNames from 'classnames';
import { useEffect } from 'react/cjs/react.development';
import ReactInputMask from 'react-input-mask';
import validator from 'react-validation';
//import MaterialInput from '@material-ui/core/Input';

/* const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'require';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `Not a valid email.`
    }
}; */

/* useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
}, [name]); */

function Field({ inputType, id, name, label, required, type, mask, placeholder, valid, options, toggle, fieldsetName, fieldsetType, items, matches }) {

    function generateFieldTag(inputType, id, name, type, mask, placeholder, required, valid, options, toggle, fieldsetName, items, matches, check) {

        switch (inputType) {
            case 'input':
                return mask ?
                    <ReactInputMask onChange={handleChangeInput} name={name} type={type ? type : 'text'} mask={mask && mask} placeholder={placeholder && placeholder} className={classNames('input', {
                        'error': valid === false
                    })} />
                    :
                    <input onChange={handleChangeInput} name={toggle ? `${fieldsetName}${name.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('')}` : name} type={type ? type : 'text'} placeholder={placeholder && placeholder} className={classNames('input', {
                        'error': valid === false
                    })} />
            case 'select':
                return <div className="select select--price">
                    <div className="select__title">
                        <span className="tariff-name">{label}</span>
                        {name === 'tariff' && <span className="tariff-price"></span>}
                    </div>
                    <div className="select__content">
                        <div className="select__content-inner">
                            {options.map((option, i) => (
                                <>
                                    <input id={`${toggle ? fieldsetName : ''}${toggle && id ? id.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('') : id}${i}`} className="select__input" type="radio" name={name} checked />
                                    <label htmlFor={`${toggle ? fieldsetName : ''}${toggle && id ? id.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('') : id}${i}`} tabIndex="0" className="select__label" data-value={name !== 'tariff' && option.title}>
                                        {name === 'tariff' ?
                                            <>
                                                <span data-tariff-name={option.title}>{option.title}</span>
                                                {i !== 0 && <span data-tariff-price>{option.price}</span>}
                                            </> : option.title
                                        }
                                    </label>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            case 'checkbox':
                return <label key={fieldsetType === 'checks' && check.id} class={classNames('form__check', {
                    'form__agree': name === 'agree',
                    'form__check--align-center': matches
                })}>
                    <input class="check-box" type="checkbox" name={matches ? `${fieldsetName}_address_matches` : name} />
                    <span class="check-style"></span>
                    {fieldsetType === 'checks' &&
                        <div class="check-title">
                            {check.title && <span>{check.title}</span>}
                            {check.price && <span>{check.price}</span>}
                        </div>
                    }
                    {check.text && <div class="check-text">{check.text}</div>}
                    {(check.label || name === 'agree') &&
                        <span class="check-content">
                            {name === 'agree' ?
                                <>Нажимая <b>Готово</b>, я подтверждаю, что ознакомлен(-а) с <a href="#">Политикой конфиденциальности</a> и даю свое согласие на обработку моих персональных данных на условиях <a href="#">Политики Конфиденциальности</a>.</>
                                : check.label
                            }
                        </span>
                    }
                </label>
            case 'radio':
                return <div className="form__radios">
                    {items.map(radio => (
                        <label key={radio} class="form__radio">
                            <input class="radio-box" type="radio" name={name} />
                            <span class="radio-style">{radio}</span>
                        </label>
                    ))}
                </div>
            case 'textarea':
                return <textarea className="input textarea" name={`${toggle && fieldsetName}_${name}`} placeholder={placeholder}></textarea>
        }
    }

    const [validField, setValidField] = useState(valid);

    const handleChangeInput = (e) => {
        if (e.target.value.length > 0) {
            setValidField(true);
        } else {
            setValidField(false);
        }
    }

    return (
        fieldsetType === 'checks' ?
            <div className="form__checks">
                {items.map(check => (
                    generateFieldTag(inputType, id, name, type, mask, placeholder, required, valid, options, toggle, fieldsetName, items, matches, check)
                ))}
            </div>
            :
            <>
                {
                    matches || name === 'agree' ?
                        <>
                            {items.map(check => (
                                generateFieldTag(inputType, id, name, type, mask, placeholder, required, valid, options, toggle, fieldsetName, items, matches, check)
                            ))}
                        </>
                        :
                        <label className="form__field">
                            <div className={classNames('form__label', {
                                'form__label--required': required
                            })}>{label}</div>
                            {generateFieldTag(inputType, id, name, type, mask, placeholder, required, valid, options, toggle, fieldsetName, items, matches)}
                        </label>
                }
            </>
    );
}

export default Field;