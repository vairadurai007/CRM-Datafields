


import React from "react";

function CheckBoxOuterLine(width = "24", height = "24") {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{ fill: "none" }}
            viewBox="0 -3 24 32"
        >
            <rect opacity="0.2" x="2" y="2" width={width} height={height} rx="3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default CheckBoxOuterLine;
