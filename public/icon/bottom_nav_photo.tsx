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

const Photo: React.FC<SvgIconProps> = ({
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
                d="M17.471 1.17H3.677a2.509 2.509 0 0 0-2.509 2.51v13.794a2.509 2.509 0 0 0 2.509 2.51h13.794a2.509 2.509 0 0 0 2.51-2.51V3.68a2.51 2.51 0 0 0-2.51-2.51Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M5.8 7.48c.837 0 1.515-.677 1.515-1.512 0-.836-.678-1.513-1.516-1.513-.837 0-1.516.677-1.516 1.513 0 .835.679 1.512 1.516 1.512Z"
                strokeWidth="1.5"
                fill="none"
            />
            <path
                d="m19.98 10.576-3.763-3.764-7.525 7.527-3.76-3.763-3.764 3.763"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
};

export default Photo;
