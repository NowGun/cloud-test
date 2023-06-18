import './_progressBar.scss';
import "react-step-progress-bar/styles.css";
import {ProgressBar, Step} from "react-step-progress-bar/index.mjs";

function per(step) {
    switch (step) {
        case 1:
            return 0
        case 2:
            return 50
        case 3:
            return 100
        default:
            return 0;
    }
}

export default function StepProgressBar({step}) {
    return (
        <div className="progressStep">
            <ProgressBar
                percent={per(step)}
                filledBackground="#5558fa"
            >
                <Step>
                    {({accomplished, index}) => (
                        <div className={`indexedStep ${accomplished ? "accomplished " : null}`}>
                            <div className="step--icon">
                                <i className={`${accomplished && step === 1 ? "icon--dot " : null} ${step > 1 ? "icon--success" : ""}`}></i>
                            </div>

                            <p>{index + 1}</p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({accomplished, index}) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                            <div className="step--icon">
                                <i className={`${accomplished && step === 2 ? "icon--dot " : null} ${step > 2 ? "icon--success" : ""}`}></i>
                            </div>

                            <p>{index + 1}</p>
                        </div>
                    )}
                </Step>
                <Step>
                    {({accomplished, index}) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : null}`}>
                            <div className="step--icon">
                                <i className={`${accomplished && step === 3 ? "icon--dot " : null} ${step > 3 ? "icon--success" : ""}`}></i>
                            </div>

                            <p>{index + 1}</p>
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </div>
    );
}