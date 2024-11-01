import React from "react";

const LocationIcon = (props) => (
  <svg
    {...props}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props?.style}
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
      d="M23.9989 25.4304C25.722 25.4304 27.1189 24.0336 27.1189 22.3104C27.1189 20.5873 25.722 19.1904 23.9989 19.1904C22.2758 19.1904 20.8789 20.5873 20.8789 22.3104C20.8789 24.0336 22.2758 25.4304 23.9989 25.4304Z"
      stroke="#FFFBF1"
      stroke-width="1.5"
    />
    <path
      d="M15.6217 20.49C17.5917 11.83 30.4217 11.84 32.3817 20.5C33.5317 25.58 30.3717 29.88 27.6017 32.54C25.5917 34.48 22.4117 34.48 20.3917 32.54C17.6317 29.88 14.4717 25.57 15.6217 20.49Z"
      stroke="#FFFBF1"
      stroke-width="1.5"
    />
  </svg>
);

export default LocationIcon;
