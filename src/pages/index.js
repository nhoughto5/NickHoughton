import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import bgImage from "../../images/bg.gif";
// import bgImage from "../../images/background.jpg";
import Header from "../components/Header";

const Background = styled.div`
    background-image: url(${bgImage});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    width: 100%;
    z-index: -2;
`;

const Cover = styled.div`
    background: black;
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.5;
    z-index: -1;
`;

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app">
                <Background>
                    <Header></Header>
                    <Cover />
                    <Button bsStyle="primary">Learn more</Button>
                </Background>
            </div>
        );
    }
}

export default IndexPage;
