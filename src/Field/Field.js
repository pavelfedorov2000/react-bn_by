import React, { useState } from 'react';
import classNames from 'classnames';
import { useEffect } from 'react/cjs/react.development';

import SlideToggle from "react-slide-toggle";
import Input from '../Fields/Input';
import Textarea from '../Fields/Textarea';
import Radio from '../Fields/Radio';
import Select from '../Fields/Select';
import Checkbox from '../Fields/Checkbox';
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

function Field({ data, field, step, currentStep, fieldset, inputType, id, name, label, required, type, mask, placeholder, valid, options, isToggle, fieldsetName, fieldsetType, items, matches, setToggleEvent, size, hidden, fieldIndex, setFormData, formData, textfield }) {

    //console.log(field && field);
    //const fieldset = step.fieldsets.find(fieldset => fieldset.id == fieldsetId);
    console.log(options);

    console.log(data);
    console.log(data[currentStep]);
    //const options = fieldset.fields[index].options && fieldset.fields[index].options;
    //const defaultOption = options && options[0].title;
    //console.log(defaultOption);

    const [checked, setChecked] = useState(false);

    const onToggle = () => {
        setChecked(!checked);
        if (isToggle) {
            setToggleEvent(checked);
        }
    }

    const [nationality, setNationality] = useState(1);
    const onCheckNationality = (index) => {
        setNationality(index);
        //console.log(nationality);
    }

    //console.log(fieldset);
    //const hiddenFields = step && step.fieldsets[fieldset].fields;
    //console.log(hiddenFields);
    //const filteredHiddenFields = hiddenFields && hiddenFields.filter(field => field.hidden === true);
    //console.log(filteredHiddenFields);

    const [temporaryRegistration, setTemporaryRegistration] = useState(false);
    const onCheckTemporaryRegistration = (index) => {
        setTemporaryRegistration(index);
    }

    /* function generateRadioChangeFunction(name, i) {
        switch (name) {
            case 'nationality':
                return onCheckNationality(i)
            case 'temporary_registration':
                return onCheckTemporaryRegistration(i)
        }
    } */

    console.log(items);

    let val;
    const onChangeField = (e, stateVal, setInputValue, checkedIndex, setInputTitle) => {
        console.log(checkedIndex);
        /* if (e.target.value.length > 0) {
            setValidField(true);
        } else {
            setValidField(false);
        } */

        if (inputType === 'radio') {
            setInputValue(checkedIndex);
            val = items[checkedIndex];
        } else if (inputType === 'select') {
            setInputValue(checkedIndex);
            val = options[checkedIndex].title;
            setInputTitle(val);
        } else {
            val = e.target.value;
            setInputValue(val);
        }

        console.log(val);
        localStorage.setItem(name, val);

        data = [
            ...data,
        ];

        data[currentStep] = {
            ...data[currentStep],
        };

        /* data[currentStep].fieldsets = [
            ...data[currentStep].fieldsets,
        ]; */

        /* data[currentStep].fieldsets[fieldset] = {
            ...data[currentStep].fieldsets[fieldset],
        }; */

        /* data[currentStep].fieldsets[fieldset].fields = [
            ...data[currentStep].fieldsets[fieldset].fields,
        ]; */

        data[currentStep].fieldsets[fieldset].fields[fieldIndex] = {
            ...data[currentStep].fieldsets[fieldset].fields[fieldIndex],
            value: val
        };

        /* if (val === '') {
            delete data[stepName][stepSubcategory][key];
        } */

        localStorage.setItem("data", JSON.stringify(data));
        data = JSON.parse(localStorage.getItem("data"));
        console.log(data);
    }

    function generateFieldTag(inputType, check) {

        switch (inputType) {
            case 'input':
                return <Input id={id} name={name} type={type} mask={mask} placeholder={placeholder} required={required} valid={valid} fieldsetName={fieldsetName} isToggle={isToggle} currentStep={currentStep} data={data} fieldset={fieldset} fieldIndex={fieldIndex} setFormData={setFormData} formData={formData} onChangeField={onChangeField} inputType={inputType} textfield={textfield} />
            case 'select':
                return <Select data={data} currentStep={currentStep} name={name} options={options} id={id} isToggle={isToggle} fieldsetName={fieldsetName} onChangeField={onChangeField} fieldset={fieldset} fieldIndex={fieldIndex} selectTitle={val} />
            case 'checkbox':
                return <Checkbox fieldsetName={fieldsetName} fieldsetType={fieldsetType} matches={matches} name={name} onToggle={onToggle} check={check} />
            case 'radio':
                return <div className="form__radios">
                    {items.map((radio, i) => (
                        <Radio radio={radio} i={i} name={name} items={items} onChangeField={onChangeField} />
                    ))}
                </div>
        }
    }

    const [validField, setValidField] = useState(valid);

    return (
        fieldsetType === 'checks' ?
            <div className="form__checks">
                {items.map(check => (
                    generateFieldTag(inputType, check)
                ))}
            </div>
            :
            <>
                {
                    matches || name === 'agree' ?
                        <>
                            {items.map(check => (
                                generateFieldTag(inputType, check)
                            ))}
                        </>
                        :
                        <>
                            {!hidden &&
                                <label className={classNames('form__field', {
                                    'form__field--small': size === 'small'
                                })}>
                                    {!textfield && <div className={classNames('form__label', {
                                        'form__label--required': required
                                    })}>{label}</div>}
                                    {generateFieldTag(inputType)}
                                </label>
                            }
                        </>
                }
            </>
    );
}

export default Field;