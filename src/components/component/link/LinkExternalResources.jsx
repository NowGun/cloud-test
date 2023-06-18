import './_link.scss'

export default function LinkExternalResources({href, text, iconName}) {
    return (
        <a href={href} className={'link'}>
            <i className={iconName}/>
            <p>{text}</p>
        </a>
    );
}