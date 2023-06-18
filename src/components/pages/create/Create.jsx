import {useEffect, useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import StepSecond from "./steps/StepSecond";
import StepFirst from "./steps/StepFirst";
import StepThird from "./steps/StepThird";
import ModalWindow from "../../component/modalWindow/ModalWindow";
import Button from "../../component/button/Button";
import {Link, useLocation} from "react-router-dom";
import StepProgressBar from "../../component/stepProgressBar/StepProgressBar";
import './_create.scss';

const validationSchema = Yup.object().shape({
    nickname: Yup
        .string()
        .max(30, 'Максимальная длина - 30 символов')
        .matches(/^[a-zA-ZА-Яа-я0-9]+$/, 'Допустимы только буквы и цифры')
        .required('Обязательное поле'),

    name: Yup
        .string()
        .max(50, 'Максимальная длина - 50 символов')
        .matches(/^[a-zA-ZА-Яа-я]+$/, 'Допустимы только буквы')
        .required('Обязательное поле'),

    surname: Yup
        .string()
        .max(50, 'Максимальная длина - 50 символов')
        .matches(/^[a-zA-ZА-Яа-я]+$/, 'Допустимы только буквы')
        .required('Обязательное поле'),

    sex: Yup
        .string()
        .oneOf(['man', 'woman'], 'Выберите пол')
        .required('Обязательное поле'),

    advantages: Yup
        .array()
        .of(Yup
            .string()
            .required('Обязательное поле'))
        .required('Обязательное поле'),

    radio: Yup
        .number()
        .required('Обязательное поле'),

    checkbox: Yup
        .array()
        .of(Yup
            .number()
            .required('Обязательное поле')),

    about: Yup
        .string()
        .max(200, 'Максимальная длина - 200 символов')
});

function renderStep(step, values) {
    switch (step) {
        case 0:
            return null;
        case 1:
            return <StepFirst values={values}/>;
        case 2:
            return <StepSecond values={values}/>;
        case 3:
            return <StepThird />;
        default:
            return null;
    }
}

const Create = () => {
    const [initialValues, setInitialValues] = useState({
        phone: '',
        email: '',
        nickname: '',
        name: '',
        surname: '',
        sex: '',
        advantages: [''],
        radio: '',
        checkbox: [],
        about: ''
    });

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    useEffect(() => {
        setInitialValues(p => ({
            ...p,
            phone: params.get("phone") || "",
            email: params.get("email") || ""
        }));
    }, []);

    const [step, setStep] = useState(1);
    const [visibleModal, setVisibleModal] = useState({visible: false, status: "error"});

    const handleBack = (e) => {
        if (step > 1) {
            e.preventDefault();
            setStep(step - 1);
        }
    };

    const SubmitButton = ({isSubmitting}) => (
        <Button type={step === 3 ? "submit" : "button"} id={step === 3 ? "button-send" : "button-next"} label={step === 3 ? "Отправить" : "Далее"}
                className="btn btn--filled" disabled={isSubmitting}
                onClick={handleContinue}/>
    );

    const handleCloseModal = () => setVisibleModal({visible: false, status: ""});

    const handleSubmit = async (values, {setSubmitting}) => {
        let response;
        try {
            response = await axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', values);
            console.log(values);
        } catch (error) {
            console.error(error);
        } finally {
            if (response)
                setVisibleModal({visible: true, status: "ok"});
            else
                setVisibleModal({visible: true, status: "error"});

            setSubmitting(false);
        }
    };

    function handleContinue(e) {
        if (step < 3) {
            e.preventDefault();
            setStep(step + 1);
        }
    }

    return (
        <div className="container">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({isSubmitting, values}) => (
                    <Form>
                        <StepProgressBar step={step}/>

                        <div className={"step-" + step}>
                            <div>
                                {renderStep(step, values)}
                            </div>
                        </div>

                        <div className="navigationButtons">
                            {
                                step === 1
                                    ? <Link to="/">
                                        <Button id="button-back" label="Назад на главную" className="btn btn--outline"
                                                onClick={handleBack}/>
                                    </Link>
                                    : <Button id="button-back" label="Назад" className="btn btn--outline"
                                              onClick={handleBack}/>
                            }
                            <SubmitButton isSubmitting={isSubmitting}/>
                        </div>

                    </Form>
                )}
            </Formik>

            {
                visibleModal && visibleModal.visible && (
                    <ModalWindow
                        status={visibleModal.status}
                        visible={visibleModal.visible}
                        onClose={handleCloseModal}
                    />
                )
            }

        </div>
    );
};

export default Create;