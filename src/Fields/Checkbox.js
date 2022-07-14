import React from 'react';
import classNames from 'classnames';

function Checkbox({ fieldsetName, fieldsetType, name, matches, onToggle, check }) {
    return (
        <label key={fieldsetType === 'checks' && check.id} class={classNames('form__check', {
            'form__agree': name === 'agree',
            'form__check--align-center': matches
        })}>
            <input class="check-box" type="checkbox" name={matches ? `${fieldsetName}_address_matches` : name} onChange={onToggle} />
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