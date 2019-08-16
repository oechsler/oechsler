import React, { ReactNode } from 'react';
import { Segment, Container, StrictContainerProps } from 'semantic-ui-react';

import './index.sass';

interface PageProps {
    anchor?: string;
    inverted?: boolean;
    textAlign?: 'left' | 'center' | 'right' | 'justified';
    background?: string;
    height?: number;

    children?: ReactNode;
}

export const Page = (props: PageProps) => {
    return (
        <div id={props.anchor} className='page'>
            <Segment
                vertical
                inverted={props.inverted}
                style={{
                    backgroundImage: `url(${props.background})`,
                    minHeight: props.height,
                }}>
                <Container textAlign={props.textAlign}>
                    {props.children}
                </Container>
            </Segment>
        </div>
    );
};
