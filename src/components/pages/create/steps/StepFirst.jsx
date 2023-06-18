import { Field, ErrorMessage } from 'formik';
import Input from "../../../component/input/Input";
import Dropdown from "../../../component/dropdown/Dropdown";
import Label from "../../../component/label/Label";

const gender = [
    { value: '', label: 'Выберите пол' },
    { id: "field-sex-option-man", value: 'man', label: 'Man' },
    { id: "field-sex-option-woman", value: 'woman', label: 'Woman' },
];

const StepFirst = () => (
    <>
        <Label text="Nickname">
            <Field component={Input} type="text" id="field-nickname" name="nickname" />
            <ErrorMessage className="error-message" name="nickname" component="span" />
        </Label>

        <Label text="Name">
            <Field component={Input} type="text" id="field-name" name="name" />
            <ErrorMessage className="error-message" name="name" component="span" />
        </Label>

        <Label text="Surname">
            <Field component={Input} type="text" id="field-surname" name="surname" />
            <ErrorMessage className="error-message" name="surname" component="span" />
        </Label>

        <Label text="Sex">
            <Field component={Dropdown} id="field-sex" name="sex" options={gender} />
            <ErrorMessage className="error-message" name="sex" component="span" />
        </Label>
    </>
);

export default StepFirst;
