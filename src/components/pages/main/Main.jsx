import Avatar from "../../component/avatar/Avatar";
import Line from "../../component/line/Line";
import LinkExternalResources from "../../component/link/LinkExternalResources";
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";

import {Link} from "react-router-dom";
import './_main.scss';
import Label from "../../component/label/Label";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

const links = [
    {
        link: "https://t.me/nowgun",
        text: "Telegram"
    },
    {
        link: "https://github.com/NowGun/cloud-test",
        text: "GitHub"
    },
    {
        link: "/",
        text: "Resume"
    }];

const validationSchema = Yup.object().shape({
    phone: Yup
        .string()
        .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат номера телефона')
        .required("Поле обязательно для заполнения"),

    email: Yup
        .string()
        .email("Введите корректный адрес электронной почты")
        .required("Поле обязательно для заполнения")
});

const initialValues = {
    phone: "+7 (999) 606-19-94",
    email: "zhirowdaniil@gmail.com",
};

const name = "Даниил Жиров";

export default function Main() {

    const onSubmit = (values) => {
        console.log(values);
        console.log('запустилось');
    };

    return (
        <div className={'container'}>
            <div className={'user--info'}>
                <Avatar text={name}/>
                <div>
                    <p>{name}</p>
                    <div className={'user--link'}>
                        {
                            links.map(l =>
                                <LinkExternalResources
                                    key={l.text}
                                    href={l.link}
                                    text={l.text}
                                    iconName="icon--folder"
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <Line/>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({values}) =>
                    <Form>
                        <div className={'inputs'}>
                            <Label text="Номер телефона">
                                <Field
                                    name="phone"
                                    id="field-phone"
                                    placeholder="+7 999 999-99-99"
                                    type="tel"
                                    disabled
                                    component={Input}
                                />
                                <ErrorMessage name="phone" component="span"/>
                            </Label>

                            <Label text="Email">
                                <Field
                                    name="email"
                                    id="field-email"
                                    placeholder={'tim.jennings@example.com'}
                                    type={'email'}
                                    disabled
                                    component={Input}
                                />
                                <ErrorMessage name="email" component="span"/>
                            </Label>
                        </div>

                        <div>
                            <Link to={`/create?phone=${encodeURIComponent(values.phone)}&email=${encodeURIComponent(values.email)}`}>
                                <Button type="submit" id="button-start" label={'Начать'} className={'btn btn--filled'}/>
                            </Link>
                        </div>
                    </Form>
                }
            </Formik>
        </div>
    );
}