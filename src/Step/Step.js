import React from 'react';

import Field from '../Field/Field';

function Step({ step }) {

    return (
        step.fieldsets.map(fieldset => (
            <fieldset key={fieldset.id} className="form__step form__fieldset">
                <legend className="form__legend">{fieldset.title}</legend>
                <>
                    {
                        fieldset.fields.map(field => (
                            <Field key={field.name} {...field} />
                        ))
                    }
                </>
            </fieldset>
        ))
    );
}

export default Step;