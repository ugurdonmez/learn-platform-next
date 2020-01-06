import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ModuleBox(props) {

    return (
        <div
            onClick={props.click}
            className="moduleBox">
            <div className="moduleBoxNumber">
                <span>{props.no}/{props.total}</span>
            </div>

            <div className="moduleBoxName">
                {props.name}
            </div>

            <div className="moduleBoxInfo">
                <span>{props.questionNumber} Soru</span>
                
                <FontAwesomeIcon className="moduleBoxIcon" icon={faCheck} />
            </div>
        </div>
    )
}