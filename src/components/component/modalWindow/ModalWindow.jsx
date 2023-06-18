import './_modalwindow.scss';
import Button from "../button/Button";
import {Link} from "react-router-dom";

export default function ModalWindow({status, onClose, visible}) {
    return (
        <>
            {
                visible &&
                <div className={`modal ${status === "ok" ? "success" : "error"}`}>
                    <div className="modal-container">
                        <div className="modal--header">
                            <p>{status === "ok" ? "Форма успешно отправлена" : "Ошибка"}</p>
                            {
                                status !== "ok" &&
                                <Button className="btn btn--gray icon--close" onClick={onClose}/>
                            }
                        </div>

                        <div className="modal--status"/>

                        <div className="modal--button">
                            {
                                status === "ok" ?
                                    <Link to="/">
                                        <Button id="button-to-main" label="На главную" className="btn btn--filled"/>
                                    </Link>
                                    : <Button id="button-close" className="btn btn--filled" label="Закрыть"
                                              onClick={onClose}/>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}