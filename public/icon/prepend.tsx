import React from 'react';

interface SvgIconProps {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Prepend: React.FC<SvgIconProps> = ({
    width = '100',
    height = '100',
    className = '',
    style = {},
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={style}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="none"
            preserveAspectRatio="xMidYMid meet"
        >
            <path d="M74 18H26c-2.21 0-4 1.79-4 4s1.79 4 4 4h20v19.328l-5.102-5.102v.004a4.062 4.062 0 00-5.078-.601 3.994 3.994 0 00-1.804 2.941 3.995 3.995 0 001.156 3.25l6.89 6.89h-.004a11.223 11.223 0 0015.872 0l6.898-6.89a3.998 3.998 0 00-.547-6.121 4.16 4.16 0 00-5.27.621l-5 5V26H74c2.21 0 4-1.789 4-4s-1.79-4-4-4zm0 64a3.997 3.997 0 004-4v-5a10 10 0 00-10-10H32c-5.523 0-10 4.477-10 10v5c0 2.21 1.79 4 4 4s4-1.79 4-4v-5a2 2 0 012-2h36a1.999 1.999 0 012 2v5a3.997 3.997 0 004 4z" />
        </svg>
    );
};

export default Prepend;
