import Label from "../../../component/label/Label";
import Textarea from "../../../component/textarea/Textarea";
import {ErrorMessage, Field} from "formik";

const StepThird = () => (
    <>
        <Label text="About">
            <Field component={Textarea} id="field-about" name="about" />
            <ErrorMessage className="error-message" name="about" component="div" />
        </Label>
    </>
);

export default StepThird;