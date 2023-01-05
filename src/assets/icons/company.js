import React from "react";

function Company(width = "24", height = "24", color = "#fff") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            style={{ fill: "none" }}
        >
            <path d="M5 22C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22H5Z" stroke={color} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 5V8H5V6C5 4.9 5.9 4 7 4H10.11C10.03 4.3 10 4.63 10 5Z" stroke={color} strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 8V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 8V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 17C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17H15Z" stroke={color}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 13V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19V5Z" stroke={color}
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default Company;
