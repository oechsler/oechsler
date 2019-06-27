import React from 'react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';

import './index.sass';

interface BrandProps {
    size: number;
    color?: SemanticCOLORS;
    inverted?: boolean;
}

const Brand = (props: BrandProps) => {
    return (
        <div className={props.inverted ? 'brand inverted' : 'brand'}>
            <span style={{ fontSize: props.size, color: props.color }}>
                <strong>Oechsler</strong>.it
            </span>
        </div>
    );
};

export default Brand;
