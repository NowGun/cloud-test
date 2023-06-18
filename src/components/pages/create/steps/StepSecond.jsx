import {Field, FieldArray, ErrorMessage} from 'formik';
import Input from "../../../component/input/Input";
import Label from "../../../component/label/Label";
import Button from "../../../component/button/Button";
import './_stepSecond.scss';
import Checkbox from "../../../component/checkbox/Checkbox";
import Radiobutton from "../../../component/radiobutton/Radiobutton";

const StepSecond = ({values}) => (
    <>
        <FieldArray name="advantages">
            {({push, remove}) => (
                <>
                    <Label text="Advantages">
                        {values.advantages.map((advantage, index) => (
                            <div key={index} className="advantages">
                                <div className="advantages--container">
                                    <Field component={Input} name={`advantages[${index}]`}
                                           id={"field-advantages-" + index} type="text" placeholder="Введите текст"/>
                                    <Button type="button" onClick={() => remove(index)} id={"button-remove-" + index}
                                            className="btn btn--transparent icon--delete"/>
                                </div>
                                <ErrorMessage className="error-message" name={`advantages[${index}]`} component="span"/>
                            </div>
                        ))}
                    </Label>

                    <Button id="button-add" className={"btn btn--outline icon--plus"} type="button"
                            onClick={() => push('')}/>
                </>
            )}
        </FieldArray>

        <Label text="Checkbox group">
            <Field
                component={Checkbox}
                name="checkbox"
                options={[
                    {id: 'field-radio-group-option-1', label: '1', value: '1'},
                    {id: 'field-radio-group-option-1', label: '2', value: '2'},
                    {id: 'field-radio-group-option-1', label: '3', value: '3'},
                ]}
            />
            <ErrorMessage className="error-message" name="checkbox" component="span"/>
        </Label>

        <Label text="Radio group">
            <Field
                component={Radiobutton}
                name="radio"
                options={[
                    {id: 'field-checkbox-group-option-1', label: '1', value: '1'},
                    {id: 'field-checkbox-group-option-2', label: '2', value: '2'},
                    {id: 'field-checkbox-group-option-3', label: '3', value: '3'},
                ]}
            />
            <ErrorMessage className="error-message" name="radio" component="span"/>
        </Label>
    </>
);

export default StepSecond;
