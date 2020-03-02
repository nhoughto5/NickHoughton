import React from "react";
import styled from "styled-components";
import Constants from "../Constants";

const Test = styled.div`
    color: ${Constants.BLUE};
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Test>Header</Test>;
    }
}

export default Header;
