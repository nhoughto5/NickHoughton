import React from "react";
import { Col } from "react-bootstrap";
import OfficeChair from "../components/svg/OfficeChair";
import "../styles/styles.scss";
class DesignColumn extends React.Component {
    render() {
        return (
            <Col className="column">
                Design
                <OfficeChair></OfficeChair>
                {/* <Chair transform="scale(1.0);"></Chair> */}
            </Col>
        );
    }
}

export default DesignColumn;
