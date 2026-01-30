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

const Ai: React.FC<SvgIconProps> = ({
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
            viewBox="0 0 26 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="m10.477 4.361.718 1.975a11.234 11.234 0 0 0 6.712 6.712l1.975.718-1.975.719a11.234 11.234 0 0 0-6.712 6.711l-.718 1.975-.718-1.975a11.234 11.234 0 0 0-6.712-6.711l-1.975-.719 1.975-.718a11.234 11.234 0 0 0 6.712-6.712l.718-1.975Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="m21.657.81.27.743a4.232 4.232 0 0 0 2.529 2.529l.743.27-.744.271a4.232 4.232 0 0 0-2.528 2.528l-.27.744-.271-.744a4.232 4.232 0 0 0-2.528-2.528l-.744-.27.744-.271a4.232 4.232 0 0 0 2.528-2.529l.27-.743Z"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
};

export default Ai;
