import React from "react";
import Header from "../components/Header";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <div>Dick</div>
            </div>
        );
    }
}

export default IndexPage;
