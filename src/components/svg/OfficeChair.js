import React, { Component } from "react";
import OfficeAnim from "../svg/officeChairAnim.svg";

class OfficeChair extends Component {
    render() {
        return (
            <div
                className="size"
                style={{
                    height: "100%",
                    width: "100%",
                    alignContent: "center",
                }}
            >
                <OfficeAnim></OfficeAnim>
            </div>
        );
    }
}

export default OfficeChair;
