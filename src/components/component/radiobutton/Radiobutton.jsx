import './_radiobutton.scss';

const Radiobutton = ({ field, form: { touched, errors, setFieldValue }, ...props }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        setFieldValue(field.name, value);
    };

    return (
        <>
            {props.options.map((option) => (
                <label key={option.value} className="radiobutton">
                    <input
                        id={option.id}
                        type="radio"
                        name={field.name}
                        value={option.value}
                        checked={field.value === option.value}
                        onChange={handleChange}
                    />
                    {option.label}
                </label>
            ))}
        </>
    );
};

export default Radiobutton;