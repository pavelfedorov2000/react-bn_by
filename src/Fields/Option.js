import React, { useState } from 'react';

function Option({ isToggle, fieldsetName, id, options, option, i, name, onChangeField, setSelectTitle, setToggleSelect }) {
    //, setSelectTitle, selectTitle, onChangeField
    //console.log(options);
    const storageValue = localStorage.getItem(name);
    console.log(storageValue);
    const checkedOption = options.findIndex(option => option.title == storageValue);
    console.log(checkedOption);

    const [selectedOption, setSelectedOption] = useState((checkedOption != -1 && checkedOption) || 0);

    const handleChangeInput = (e) => {
        console.log(selectedOption);
        onChangeField(e, options[selectedOption], setSelectedOption, i, setSelectTitle);
        setToggleSelect(false);
    }

    return (
        <>
            <input onChange={handleChangeInput} id={`${isToggle ? fieldsetName : ''}${isToggle && id ? id.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('') : id}${i}`} className="select__input" type="radio" name={name} checked={selectedOption == i ? true : false} />
            <label htmlFor={`${isToggle ? fieldsetName : ''}${isToggle && id ? id.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('') : id}${i}`} tabIndex="0" className="select__label" data-value={name !== 'tariff' && option.title}>
                {name === 'tariff' ?
                    <>
                        <span data-tariff-name={option.title}>{option.title}</span>
                        {i !== 0 && <span data-tariff-price>{option.price}</span>}
                    </> : option.title
                }
            </label>
        </>
    );
}

export default Option;