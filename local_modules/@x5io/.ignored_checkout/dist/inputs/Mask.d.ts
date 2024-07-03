import React from 'react';
interface CustomProps {
    onChange: (event: {
        target: {
            'data-pf': string;
            value: string;
        };
    }) => void;
    'data-pf': string;
}
declare const Mask: React.ForwardRefExoticComponent<CustomProps & React.RefAttributes<HTMLElement>>;
export default Mask;
