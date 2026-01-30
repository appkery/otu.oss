import React from 'react';

interface SvgIconProps {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Plus: React.FC<SvgIconProps> = ({
    width = '20',
    height = '20',
    className = '',
    style = {},
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={style}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <path d="M20.43 9.79H.889v1.072H20.43V9.789Z" />
            <path d="M11.202.67h-1.086V19.98h1.086V.671Z" />
        </svg>
    );
};

export default Plus;
