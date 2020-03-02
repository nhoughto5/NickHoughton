import React from "react";
import styled from "styled-components";
import bgImage from "../../images/background.jpg";

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
                <Background />
            </div>
        );
    }
}

export default IndexPage;
