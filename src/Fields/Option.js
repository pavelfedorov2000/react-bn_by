import React, { useState } from 'react';

function Option({ isToggle, fieldsetName, id, options, option, i, name, setSelectTitle, selectTitle }) {

    console.log(options);
    const [selectedOption, setSelectedOption] = useState(0);
    const onSelectOption = () => {
        setSelectedOption(i);
        console.log(selectedOption);
        setSelectTitle(options[selectedOption].title);
        console.log(selectTitle);
    }

    return (
        <>
            <input onChange={onSelectOption} id={`${isToggle ? fieldsetName : ''}${isToggle && id ? id.split('').map((letter, i) => i == 0 ? letter.toUpperCase() : letter).join('') : id}${i}`} className="select__input" type="radio" name={name} checked={i === 0 || selectedOption ? true : false} />
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