import Avatar from "../component/avatar/Avatar";
import Line from "../component/line/Line";
import Link from "../component/link/Link";
import Input from "../component/input/Input";
import Button from "../component/button/Button";

import './_main.scss';

export default function Main() {
    return (
        <div className={'container'}>
            <div className={'user--info'}>
                <Avatar text={'АИ'}/>
                <div>
                    <p>Иван Иванов</p>
                    <div className={'user--link'}>
                        <Link text={'Telegram'} iconName={'folder'}/>
                        <Link text={'GitHub'} iconName={'folder'}/>
                        <Link text={'Resume'} iconName={'folder'}/>
                    </div>
                </div>
            </div>
            <Line />
            <div className={'inputs'}>
                <Input placeholder={'+7 999 999-99-99'} type={'text'} text={'Номер телефона'} textType={'pos vertical'}/>
                <Input placeholder={'tim.jennings@example.com'} type={'email'} text={'Email'} textType={'pos vertical'}/>
            </div>
            
            <div>
                <Button label={'Начать'} />
            </div>
        </div>
    );
}