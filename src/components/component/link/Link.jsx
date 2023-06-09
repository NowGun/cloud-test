import Icon from "../icon/Icon";
import './_link.scss'
export default function Link({text, iconName}) {
    return (
        <div className={'link'}>
            <Icon iconName={iconName}/>
            <p>{text}</p>
        </div>
    );
}