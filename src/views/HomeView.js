import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DesignColumn from "../components/DesignColumn";
import "../styles/styles.scss";

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className="container">
                <Row className="rowStyle">
                    <DesignColumn></DesignColumn>
                    <Col className="column colAlt">Development</Col>
                    <Col className="column">Deployment</Col>
                    <Col className="colAlt">Software Management</Col>
                </Row>
            </Container>
        );
    }
}
export default HomeView;
