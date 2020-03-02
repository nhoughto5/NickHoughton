import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import bgImage from "../../images/background.jpg";
import Header from "../components/Header";

const Background = styled.div`
    background-image: url(${bgImage});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app">
                <Header></Header>
                <Button bsStyle="primary">Learn more</Button>
                <Background />
            </div>
        );
    }
}

export default IndexPage;
