import React from 'react';

interface SvgIconProps {
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Search: React.FC<SvgIconProps> = ({
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
            <path d="M9.42 17.811c-4.794 0-8.694-3.853-8.694-8.59C.726 4.483 4.626.63 9.42.63s8.695 3.853 8.695 8.59c0 4.738-3.9 8.591-8.695 8.591Zm0-16.107c-4.195 0-7.609 3.372-7.609 7.518s3.414 7.518 7.61 7.518 7.61-3.372 7.61-7.518-3.414-7.518-7.61-7.518Z" />
            <path d="m15.911 14.875-.767.759 4.082 4.033.768-.758-4.083-4.034Z" />
        </svg>
    );
};

export default Search;
