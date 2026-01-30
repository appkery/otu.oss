import React from 'react';

interface SvgIconProps {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Back: React.FC<SvgIconProps> = ({
    width = '24',
    height = '24',
    className = '',
    style = {},
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={style}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0L9 3M3 9h12a6 6 0 0 1 0 12h-3"
            />
        </svg>
    );
};

export default Back;
