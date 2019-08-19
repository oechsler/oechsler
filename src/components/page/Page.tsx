import React, { ReactNode } from 'react';
import { Segment, Container } from 'semantic-ui-react';

import './index.sass';

interface PageProps {
    anchor?: string;
    background?: string;
    height?: number | string;
    inverted?: boolean;
    textAlign?: 'left' | 'center' | 'right' | 'justified';

    className?: string;
    children?: ReactNode;
}

export const Page = (props: PageProps) => {
    return (
        <div id={props.anchor} className='page'>
            <Segment
                vertical
                inverted={props.inverted}
                style={{ backgroundImage: `url(${props.background})` }}>
                <Container
                    style={{ minHeight: props.height }}
                    textAlign={props.textAlign}
                    className={props.className}>
                    {props.children}
                </Container>
            </Segment>
        </div>
    );
};
