import './_checkbox.scss';

const Checkbox = ({ field, form: { touched, errors, setFieldValue }, ...props }) => {
    const handleChange = (e) => {
        const { value, checked } = e.target;
        const checkboxValues = field.value;

        if (checked) {
            checkboxValues.push(value);
        } else {
            const index = checkboxValues.indexOf(value);
            if (index !== -1) {
                checkboxValues.splice(index, 1);
            }
        }

        setFieldValue(field.name, checkboxValues);
    };

    return (
        <>
            {props.options.map((option) => (
                <label key={option.value} className='checkbox'>
                    <input
                        id={option.id}
                        type="checkbox"
                        name={field.name}
                        value={option.value}
                        checked={field.value.includes(option.value)}
                        onChange={handleChange}
                    />
                    {option.label}
                </label>
            ))}
        </>
    );
};

export default Checkbox;
