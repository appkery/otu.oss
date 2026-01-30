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

const Search: React.FC<SvgIconProps> = ({
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
                d="M9.32763 17.5596C13.8732 17.5596 17.5581 13.8747 17.5581 9.32909C17.5581 4.78354 13.8732 1.09863 9.32763 1.09863C4.78207 1.09863 1.09717 4.78354 1.09717 9.32909C1.09717 13.8747 4.78207 17.5596 9.32763 17.5596Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M20.1377 20.1379L15.4468 15.4502"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Search;
