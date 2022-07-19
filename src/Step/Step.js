import React, { useContext, useState } from 'react';
import SlideToggle from "react-slide-toggle";
import { FormContext } from '../context';
import Field from '../Field/Field';

function Step({ setFormData, formData }) {

    const { visibleStep } = useContext(FormContext);

    const [toggleEvent, setToggleEvent] = useState(true);

    console.log(visibleStep);

    return (
        visibleStep !== 'result' && visibleStep.fieldsets.map((fieldset, index) => (
            fieldset.isToggle ?
                <SlideToggle
                    collapsed={true}
                    render={({ toggle, setCollapsibleElement }) => (
                        <fieldset key={fieldset.id} className="form__step form__fieldset">
                            <legend className="form__legend" onClick={toggle}>
                                <span>{fieldset.title}</span>
                                {fieldset.isToggle && <span className="form__legend-drop"></span>}
                            </legend>
                            <div ref={setCollapsibleElement}>
                                <Field {...fieldset.checkbox} fieldsetType={fieldset.type} isToggle={fieldset.isToggle} fieldsetName={fieldset.name} setToggleEvent={setToggleEvent} setFormData={setFormData} />
                                {toggleEvent &&
                                    <div className="form__fields">
                                        {
                                            fieldset.fields.map((field, i) => (
                                                <Field key={field.name}  {...field} fieldsetType={fieldset.type} isToggle={fieldset.isToggle} fieldsetName={fieldset.name} setFormData={setFormData} />
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </fieldset>
                    )}
                />
                :
                <fieldset key={fieldset.id} className="form__step form__fieldset">
                    {fieldset.title &&
                        <legend className="form__legend">
                            <span>{fieldset.title}</span>
                            {fieldset.isToggle && <span className="form__legend-drop"></span>}
                        </legend>
                    }
                    <>
                        {
                            fieldset.fields.map((field, i) => (
                                <Field key={field.id} fieldset={index} fieldIndex={i} field={field} {...field} fieldsetType={fieldset.type} isToggle={fieldset.isToggle} fieldsetName={fieldset.name} />
                            ))
                        }
                    </>
                </fieldset>
        ))
    );
}

export default Step;