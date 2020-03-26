import React, { Component } from "react";
import Star from "../../../svg/star.svg";

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
                <Star></Star>
            </div>
        );
    }
}

export default OfficeChair;
