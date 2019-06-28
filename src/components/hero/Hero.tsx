import React, { ReactNode } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import './index.sass';
import { typeFilter } from '../../utils/typeFilter';
import { Navigation } from '../navigation/Navigation';

interface HeroBackground {
    color?: string;
    image?: string;
    opacity?: number;
    blur?: number;
    scale?: number;
    translation?: number;
}

interface HeroProps {
    background?: HeroBackground;
    inverted?: boolean;

    children: ReactNode;
}

export const Hero = (props: HeroProps) => {
    const renderBackground = () => {
        if (props.background)
            return (
                <div
                    className='hero-background'
                    style={{
                        backgroundImage: 'url(' + props.background.image + ')',
                        backgroundPositionY:
                            '-' + props.background.translation + 'px',
                        backgroundSize:
                            'calc(100% * ' + props.background.scale + ')',
                        filter: 'blur(' + props.background.blur + 'px)',
                        opacity: props.background.opacity,
                    }}
                />
            );
    };

    const renderNavigation = () => {
        const navigation = typeFilter(props.children, [Navigation]);
        if (navigation)
            return <div className='hero-navigation'>{navigation}</div>;
    };

    return (
        <div className='hero'>
            <Segment
                className='hero-segment'
                style={{
                    backgroundColor: props.background
                        ? props.background.color
                        : null,
                }}
                vertical
                inverted={props.inverted}>
                {renderBackground()}
                {renderNavigation()}
                <Container className='hero-container'>
                    {typeFilter(props.children, [Navigation], true)}
                </Container>
            </Segment>
        </div>
    );
};
