import React, { useState } from 'react';

function Radio({ radio, name, i, onChangeField, items }) {

    //console.log(i);

    const storageValue = localStorage.getItem(name);
    const checkedParam = items.indexOf(storageValue);
    console.log(checkedParam);
    const [radioChecked, setRadioChecked] = useState(null || (checkedParam != -1 && storageValue));
    console.log(radioChecked);
    const [radioValue, setRadioValue] = useState('');
    /* const onCheckRadio = () => {
        setRadioValue(i);
        console.log(radioValue);
    } */

    const handleChangeInput = (e) => {
        setRadioChecked(i);
        console.log(radioChecked);
        onChangeField(e, radioValue, setRadioValue, i);
    }

    return (
        <label key={radio} class="form__radio">
            <input onChange={handleChangeInput} class="radio-box" type="radio" name={name} checked={radioChecked !== null ? true : false} />
            <span class="radio-style">{radio}</span>
        </label>
    );
}

export default Radio;