import React, { useState } from 'react';

function Radio({ radio, name, i, onChangeRadio, items }) {

    console.log(i);

    const checkedIndex = items.indexOf(localStorage.getItem(name));
    const [radioChecked, setRadioChecked] = useState(0);
    console.log(radioChecked);
    const [radioValue, setRadioValue] = useState('');
    console.log(radioValue);
    /* const onCheckRadio = () => {
        setRadioValue(i);
        console.log(radioValue);
    } */

    const handleChangeInput = () => {
        setRadioChecked(i);
        console.log(radioChecked);
        onChangeRadio(radioValue, setRadioValue, radioChecked);
    }

    return (
        <label key={radio} class="form__radio">
            <input onChange={handleChangeInput} class="radio-box" type="radio" name={name} />
            <span class="radio-style">{radio}</span>
        </label>
    );
}

export default Radio;