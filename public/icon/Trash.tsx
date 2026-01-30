import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

const TrashIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon {...props} viewBox="0 0 16 14" fill="none">
        <path
            d="m14.09 3.727-.454 7.733A1.637 1.637 0 0 1 12.002 13H4.18a1.636 1.636 0 0 1-1.635-1.54l-.454-7.733m4.364 3L8.09 8.364m0 0L9.727 10M8.091 8.364l1.636-1.637M8.091 8.364 6.455 10M1.818 3.727h12.546a.818.818 0 0 0 .818-.818V1.82a.818.818 0 0 0-.818-.82H1.818A.818.818 0 0 0 1 1.818V2.91c0 .452.367.818.818.818Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </SvgIcon>
);

export default TrashIcon;
