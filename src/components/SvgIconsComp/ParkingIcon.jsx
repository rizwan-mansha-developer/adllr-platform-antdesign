import React from "react";

const ParkingIcon = (props) => {
  return (
    <svg
      {...props}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.1" />
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke="white"
        stroke-opacity="0.4"
      />
      <path
        opacity="0.4"
        d="M17.4687 21C19.4017 21 20.9688 19.433 20.9688 17.5C20.9688 15.567 19.4017 14 17.4687 14C15.5358 14 13.9688 15.567 13.9688 17.5C13.9688 19.433 15.5358 21 17.4687 21Z"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        opacity="0.4"
        d="M28.9687 27H31.9687C33.0687 27 33.9687 27.9 33.9687 29V32C33.9687 33.1 33.0687 34 31.9687 34H28.9687C27.8687 34 26.9688 33.1 26.9688 32V29C26.9688 27.9 27.8687 27 28.9687 27Z"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M24.0017 17H26.6817C28.5317 17 29.3917 19.29 28.0017 20.51L20.0117 27.5C18.6217 28.71 19.4817 31 21.3217 31H24.0017"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4877 17.5H17.4992"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.4877 30.5H30.4992"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ParkingIcon;
