import React from 'react';

import Field from '../Field/Field';

function Step({ step }) {

    return (
        step.fieldsets.map(fieldset => (
            <fieldset key={fieldset.id} className="form__step form__fieldset">
                <legend className="form__legend">
                    <span>{fieldset.title}</span>
                    {fieldset.toggle && <span className="form__legend-drop"></span>}
                </legend>
                <>
                    {
                        fieldset.fields.map(field => (
                            <Field key={field.name} {...field} fieldsetType={fieldset.type} toggle={fieldset.toggle} fieldsetName={fieldset.name} />
                        ))
                    }
                </>
            </fieldset>
        ))
    );
}

export default Step;