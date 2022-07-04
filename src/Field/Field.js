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

function Field({ inputType, name, label, required, type, mask, placeholder, valid }) {

    function generateFieldTag(inputType, name, type, mask, placeholder, required, valid) {
        switch (inputType) {
            case 'input':
                return mask ?
                    <ReactInputMask onChange={handleChangeInput} name={name} type={type ? type : 'text'} mask={mask && mask} placeholder={placeholder && placeholder} className={classNames('input', {
                        'error': valid === false
                    })} />
                    :
                    <input onChange={handleChangeInput} name={name} type={type ? type : 'text'} placeholder={placeholder && placeholder} className={classNames('input', {
                        'error': valid === false
                    })} />
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
        <label className="form__field">
            <div className={classNames('form__label', {
                'form__label--required': required
            })}>{label}</div>
            {generateFieldTag(inputType, name, type, mask, placeholder, required, valid)}
        </label>
    );
}

export default Field;