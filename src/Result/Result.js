import React, { useContext } from 'react';
import Button from '../Button/Button';
import { FormContext } from '../context';

function Result({ editForm }) {

    const { formData } = useContext(FormContext);

    const resultData = [...formData];

    function filterData(resultData) {
        return resultData.filter(function (step) {
            step.fieldsets = step.fieldsets.filter(function (fieldset) {
                fieldset.fields = fieldset.fields.filter(function (field) {
                    return field.value !== '' && field.name !== 'agree'
                });
                return fieldset.fields.length
            });
            return step.fieldsets.length
        });
    }

    const filteredData = filterData(resultData);

    console.log(filteredData);

    return (
        <div class="form-result">
            <div class="_container">
                <div class="form-result__body">
                    <div class="form-result__head">
                        <div class="form-result__title form-result__head-title">
                            Заявка на подключение интернета «Деловой сети»
                        </div>
                        <div class="form-result__head-text">
                            <p>Пожалуйста, проверьте правильность заполненной информации.</p>
                            <p>
                                Если информация верна – нажмите
                                Отправить. Если вы хотите внести изменения – нажмите Вернуться к редактированию.
                            </p>
                        </div>
                        <Button onClick={editForm} className="form-result__head-edit" type="button" text="Вернуться к редактированию" />
                        <Button className="form-result__head-btn" type="submit" text="Отправить" />
                    </div>
                    <div class="form-result__content">
                        {filteredData.map(section => (
                            <div key={section.id} class="form-result-section">
                                <div class="form-result-section__inner">
                                    <div class="form-result__title form-result-section__title">{section.title}</div>
                                    <div class="form-result-section__content">
                                        {section.fieldsets.map(fieldset => (
                                            <div div key={fieldset.id} class="form-result-section__item" >
                                                {fieldset.title && <div class="form-result-section__content-title">{fieldset.title}</div>}
                                                <div class="form-result-section__fields">
                                                    {fieldset.fields.map(field => (
                                                        <div div key={field.id} class="form-result-section__field" >
                                                            <div class="form-result-section__label">{field.label}</div>
                                                            <div class="form-result-section__val">{field.value}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="form-result__buttons">
                        <Button className="form-result__submit" border type="button" text="Вернуться к редактированию" />
                        <Button className="form-result__submit" type="submit" text="Отправить" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;