import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import "../styles/styles.scss";

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ButtonToolbar>
                <Button variant="primary" className="inverse">
                    Primary
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>
        );
    }
}
export default HomeView;
