import './_label.scss';

export default function Label({children, text, type = "pos pos--vertical"}) {
    return (
        <div className={type}>
            <label htmlFor={text.toLowerCase()}>{text}</label>
            {children}
        </div>
    );
}