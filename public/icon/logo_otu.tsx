/*
svg를 컴포넌트로 포팅하는 방법
1. svg 코드를 리턴값으로 하는 함수를 만든다.
2. width, height, className, style을 props로 받는다. svg내에 fill=""로 설정된 부분은 제거한다. (모노톤 svg의 경우)
3. viewBox를 설정하고, preserveAspectRatio를 설정한다. 이렇게 해야 크기의 비율이 유지된다.
*/
import React from 'react';

interface SvgIconProps {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Logo: React.FC<SvgIconProps> = ({
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
            viewBox="0 0 57 28"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <g clipPath="url(#prefix__clip0_795_28)">
                <path d="M22.72 4.91h3.416v20.76c0 1.24 1.04 2.247 2.32 2.247 1.279 0 2.318-1.007 2.318-2.246V4.909h3.415c1.315 0 2.38-1.03 2.38-2.304 0-1.273-1.065-2.304-2.38-2.304H22.724c-1.315 0-2.38 1.03-2.38 2.304 0 1.273 1.065 2.304 2.38 2.304h-.003zM8.122.3C3.652.3.012 3.919.012 8.365V19.85c0 4.445 3.64 8.063 8.11 8.063 4.47 0 8.11-3.618 8.11-8.063V8.364C16.237 3.918 12.597.3 8.123.3zm3.479 19.55c0 1.906-1.559 3.455-3.476 3.455-1.916 0-3.475-1.549-3.475-3.454V8.364c0-1.906 1.559-3.455 3.475-3.455 1.917 0 3.476 1.55 3.476 3.455V19.85zM52.276 19.85c0 1.906-1.559 3.455-3.475 3.455-1.917 0-3.476-1.549-3.476-3.454V2.547c0-1.24-1.039-2.246-2.319-2.246s-2.319 1.006-2.319 2.246v17.307c0 4.445 3.64 8.063 8.11 8.063 4.47 0 8.11-3.618 8.11-8.063V2.547C56.908 1.307 55.87.3 54.59.3s-2.32 1.006-2.32 2.246v17.307l.007-.003z" />
            </g>
            <defs>
                <clipPath id="prefix__clip0_795_28">
                    <path transform="translate(.012 .3)" d="M0 0h56.899v27.613H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Logo;
