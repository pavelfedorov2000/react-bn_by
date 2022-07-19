import React, { useState } from 'react';
import classNames from 'classnames';

function Checkbox({ fieldsetName, fieldsetType, name, matches, onToggle, check, onChangeField, index }) {

    //const storageValue = localStorage.getItem(name);
    //const checkedParam = items.indexOf(storageValue);
    //console.log(checkedParam);
    //const [checkedItems, setCheckedItems] = useState([]);
    //console.log(checkedItems);

    const [checked, setChecked] = useState(false);
    const [checkedItem, setCheckedItem] = useState(null);
    /* const onCheckRadio = () => {
        setRadioValue(i);
        console.log(radioValue);
    } */

    const handleCheckCheckbox = (e) => {
        setChecked(!checked);
        console.log(checked);
        //let newItems;
        if (check) {
            if (checked) {
                // /`${check.title}: ${check.price}`
                setCheckedItem(index);
            } else {
                setCheckedItem(null);
            }
        }
        if (matches) {
            onToggle();
        }
        console.log(checked);
        console.log(checkedItem);
        onChangeField(e, setCheckedItem, checkedItem, checked);
    }

    return (
        <label key={fieldsetType === 'checks' && check.id} class={classNames('form__check', {
            'form__agree': name === 'agree',
            'form__check--align-center': matches
        })}>
            <input class="check-box" type="checkbox" name={matches ? `${fieldsetName}_address_matches` : name} onChange={handleCheckCheckbox} />
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
    );
}

export default Checkbox;