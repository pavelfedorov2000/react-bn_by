import React, { useState } from 'react';
import SlideToggle from "react-slide-toggle";
import Field from '../Field/Field';

function Step({ step, data, currentStep }) {

    const [toggleEvent, setToggleEvent] = useState(true);

    return (
        step.fieldsets.map((fieldset, index) => (
            fieldset.toggle ?
                <SlideToggle
                    collapsed={true}
                    render={({ toggle, setCollapsibleElement }) => (
                        <fieldset key={fieldset.id} className="form__step form__fieldset">
                            <legend className="form__legend" onClick={toggle}>
                                <span>{fieldset.title}</span>
                                {fieldset.toggle && <span className="form__legend-drop"></span>}
                            </legend>
                            <div ref={setCollapsibleElement}>
                                <Field data={data} {...fieldset.checkbox} fieldsetType={fieldset.type} toggle={fieldset.toggle} fieldsetName={fieldset.name} setToggleEvent={setToggleEvent} />
                                {toggleEvent &&
                                    <div className="form__fields">
                                        {
                                            fieldset.fields.map((field, i) => (
                                                <Field key={field.name} data={data} {...field} fieldsetType={fieldset.type} toggle={fieldset.toggle} fieldsetName={fieldset.name} />
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
                    <legend className="form__legend">
                        <span>{fieldset.title}</span>
                        {fieldset.toggle && <span className="form__legend-drop"></span>}
                    </legend>
                    <>
                        {
                            fieldset.fields.map((field, i) => (
                                <Field key={field.name} currentStep={currentStep} fieldset={index} fieldIndex={i} step={step} data={data} {...field} fieldsetType={fieldset.type} toggle={fieldset.toggle} fieldsetName={fieldset.name} />
                            ))
                        }
                    </>
                </fieldset>
        ))
    );
}

export default Step;