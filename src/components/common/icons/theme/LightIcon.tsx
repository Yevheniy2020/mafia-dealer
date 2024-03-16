import * as React from 'react';
import { FC } from 'react';

interface IconProps {
  isDark?: boolean;
}

const LightIcon: FC<IconProps> = ({ isDark = false, ...rest }) => {
  const pathFill = isDark ? '#FFFFFF' : '#111928';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...rest}
    >
      <g clipPath="url(#a)">
        <path
          fill={pathFill}
          fillRule="evenodd"
          d="M8 0c.368 0 .667.298.667.667V2a.667.667 0 0 1-1.334 0V.667C7.333.298 7.632 0 8 0Zm0 5.333a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4.667 6a.667.667 0 1 0-1.334 0v1.333a.667.667 0 1 0 1.334 0V14ZM2.34 2.342c.26-.26.683-.26.943 0l.947.947a.667.667 0 1 1-.943.943l-.947-.947a.667.667 0 0 1 0-.943Zm10.37 9.426a.667.667 0 1 0-.943.943l.947.947a.667.667 0 0 0 .943-.943l-.947-.947ZM0 8c0-.368.298-.667.667-.667H2a.667.667 0 0 1 0 1.334H.667A.667.667 0 0 1 0 8Zm14-.667a.667.667 0 1 0 0 1.334h1.333a.667.667 0 1 0 0-1.334H14Zm-9.77 4.435c.26.26.26.683 0 .943l-.946.947a.667.667 0 0 1-.943-.943l.947-.947c.26-.26.682-.26.943 0Zm9.428-8.483a.667.667 0 0 0-.943-.943l-.947.947a.667.667 0 1 0 .943.943l.947-.947Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={pathFill} d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LightIcon;
