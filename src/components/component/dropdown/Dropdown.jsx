import './_dropdown.scss';

const Dropdown = ({field, options, ...props}) => {
    return (
        <div className="select">
            <select {...field} {...props}>
                {
                    options.map((o) => (
                        <option id={o.id} key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default Dropdown;