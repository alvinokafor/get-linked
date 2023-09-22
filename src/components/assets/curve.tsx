import React from "react";

export function Curve() {
  return (
    <svg
      className="hidden sm:block"
      width="255"
      height="17"
      viewBox="0 0 255 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
        stroke="#FF26B9"
        strokeWidth="5"
      />
    </svg>
  );
}

export function CurveMobile() {
  return (
    <svg
      className="sm:hidden"
      width="117"
      height="11"
      viewBox="0 0 117 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
        stroke="#FF26B9"
        strokeWidth="3"
      />
    </svg>
  );
}
