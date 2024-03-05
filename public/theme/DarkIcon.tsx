import * as React from "react"
const DarkIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#1F2A37"
            fillRule="evenodd"
            d="M6.695.34a.667.667 0 0 1-.044.723 4 4 0 0 0 5.594 5.594.667.667 0 0 1 1.06.598A6.667 6.667 0 1 1 6.053.003a.667.667 0 0 1 .642.336ZM4.852 1.625a5.333 5.333 0 1 0 6.83 6.83 5.332 5.332 0 0 1-6.83-6.83Z"
            clipRule="evenodd"
        />
    </svg>
)
export default DarkIcon
