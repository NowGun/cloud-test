import './_textarea.scss';

const Textarea = ({field, form: {touched, errors, setFieldValue}, ...props}) => {
    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(field.name, value);
    };
    const characterCount = field.value.replace(/\s+/g, "").length;
    return (
        <div className="textarea">
            <textarea {...field} {...props} onChange={handleChange}/>
            <div>
                <p>{characterCount}</p>
            </div>
        </div>

    );
}

export default Textarea;