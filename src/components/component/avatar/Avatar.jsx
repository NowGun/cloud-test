import './_avatar.scss'

export default function Avatar({text}) {
    return (
        <div className={'avatar'}>
            <p>{text}</p>    
        </div>
    );
}