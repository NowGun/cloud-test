import './_input.scss'
import MaskedInput from 'react-text-mask';

const phoneNumberMask = [
    '+',
    '7',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
];

const Input = ({field, form, disabled, ...props}) => {
    const {name} = field;
    const {touched, errors, setFieldValue} = form;

    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(name, value);
    };

    const handleClear = () => {
        setFieldValue(name, '');
    };
    return (
        <div className="input">
            {'' === 'tel' ? (
                <MaskedInput
                    mask={phoneNumberMask}
                    placeholder="+7 (999) 999-99-99"
                    guide={false}
                    showMask={false}
                    disabled={disabled}
                    {...field}
                    {...props}
                />
            ) : (
                <input {...field} {...props} disabled={disabled} onChange={handleChange}
                />
            )}

            {
                field.value && !disabled && (
                    <button type="button" onClick={handleClear}>
                        <i className="icon--close"/>
                    </button>
                )
            }
        </div>
    );
};

export default Input;