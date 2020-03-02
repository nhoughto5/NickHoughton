import React from "react";
import styled from "styled-components";

const Test = styled.div`
    color: red;
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
