import React from 'react';

import './index.sass';

interface BrandProps {
    size: number;
    inverted?: boolean;
}

export const Brand = (props: BrandProps) => {
    return (
        <div className={props.inverted ? 'brand inverted' : 'brand'}>
            <span style={{ fontSize: props.size }}>
                <strong>Oechsler</strong>.it
            </span>
        </div>
    );
};
