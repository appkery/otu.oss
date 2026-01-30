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

const Create: React.FC<SvgIconProps> = ({
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
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M10.6152 1.21387V20.0235"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.21289 10.6182H20.0226"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Create;
