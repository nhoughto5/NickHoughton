import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import bgImage from "../../images/bg.gif";
// import bgImage from "../../images/background.jpg";
import Header from "../components/Header";
import "../styles/styles.scss";
import HomeView from "../views/HomeView";

const Background = styled.div`
    background-image: url(${bgImage});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
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
                    <HomeView></HomeView>
                </Background>
            </div>
        );
    }
}

export default IndexPage;
