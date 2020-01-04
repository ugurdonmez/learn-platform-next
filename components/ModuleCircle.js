import { Col } from 'react-bootstrap'

export default function ModuleCircle(props) {
    return (
        <Col onClick={props.click}>
            <div className="moduleCircle">
                <img alt="png" src={props.logo} />
            </div>
            <div className="moduleCircleText">
                {props.text}
            </div>
        </Col>
    )
}