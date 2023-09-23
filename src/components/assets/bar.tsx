import React from "react";

export function Bar() {
  return (
    <svg
      width="4"
      height="137"
      viewBox="0 0 4 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="8.74228e-08"
        x2="1.99999"
        y2="137"
        stroke="#D434FE"
        strokeWidth="4"
      />
    </svg>
  );
}

export function VerticalPartnerBar() {
  return (
    <svg
      className="basis-1/5"
      width="5"
      height="113"
      viewBox="0 0 5 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.90845"
        y1="112.476"
        x2="2.90845"
        y2="0.00025177"
        stroke="#D434FE"
        strokeWidth="4"
      />
    </svg>
  );
}

export function HorizontalPartnerBar({
  paddingRight = "pr-0",
  paddingLeft = "pl-0",
}: {
  paddingRight?: string;
  paddingLeft?: string;
}) {
  return (
    <svg
      className={`basis-2/5 ${paddingRight} ${paddingLeft}`}
      width="258"
      height="5"
      viewBox="0 0 258 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="2.67578"
        x2="257.298"
        y2="2.67578"
        stroke="#D434FE"
        strokeWidth="4"
      />
    </svg>
  );
}
