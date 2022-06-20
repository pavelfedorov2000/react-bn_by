import React from 'react';
import classNames from 'classnames';

function Step({ step }) {

    console.log(step);

    function generateFieldTag(inputType, name, type) {
        switch (inputType) {
            case 'input':
                return <input className="input" name={name} type={type ? type : null} />
        }
    }

    return (
        step.fieldsets.map(fieldset => (
            <fieldset key={fieldset.id} className="form__step form__fieldset">
                <legend className="form__legend">{fieldset.title}</legend>
                <>
                    {
                        fieldset.fields.map(field => (
                            <label key={field.name} className="form__field">
                                <div className={classNames('form__label', {
                                    'form__label--required': field.required
                                })}>{field.label}</div>
                                {generateFieldTag(field.inputType, field.name)}
                            </label>
                        ))
                    }
                </>
            </fieldset>
        ))
    );
}

export default Step;