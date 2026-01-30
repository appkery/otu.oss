/**
 * Loading animation component that displays four animated circles
 * Uses Material-UI SvgIcon component for consistent theming
 */

import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

const LoadingIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} style={{ contain: 'layout', willChange: 'transform' }}>
            <style>
                {`
                    @keyframes spinner_qtyZ {
                        0% { 
                            transform: translateX(0) scale(0);
                            opacity: 0;
                        }
                        25% { 
                            transform: translateX(0) scale(1);
                            opacity: 1;
                        }
                        50% { 
                            transform: translateX(8px) scale(1);
                            opacity: 1;
                        }
                        75% { 
                            transform: translateX(16px) scale(1);
                            opacity: 1;
                        }
                        to { 
                            transform: translateX(16px) scale(0);
                            opacity: 0;
                        }
                    }
                    .spinner_nOfF {
                        animation: spinner_qtyZ 2s cubic-bezier(.36,.6,.31,1) infinite;
                        transform-origin: center;
                        will-change: transform, opacity;
                    }
                `}
            </style>
            <circle className="spinner_nOfF" cx="4" cy="12" r="3" />
            <circle
                className="spinner_nOfF"
                cx="4"
                cy="12"
                r="3"
                style={{ animationDelay: '-0.5s' }}
            />
            <circle
                className="spinner_nOfF"
                cx="4"
                cy="12"
                r="3"
                style={{ animationDelay: '-1s' }}
            />
            <circle
                className="spinner_nOfF"
                cx="4"
                cy="12"
                r="3"
                style={{ animationDelay: '-1.5s' }}
            />
        </SvgIcon>
    );
};

export default LoadingIcon;
