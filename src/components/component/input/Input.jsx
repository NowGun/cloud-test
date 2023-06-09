import './_input.scss'

export default function Input({text, textType, type, placeholder}) {
    return (
        <div className={textType}>
            <p>{text}</p>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
}