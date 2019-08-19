import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Label, Icon } from 'semantic-ui-react';

import './index.sass';

interface TopProps {
    visibility: boolean;
}

const Top = (props: TopProps) => {
    const circleSpring = useSpring({
        config: { tension: 200 },
        right: props.visibility ? '1em' : '-2.5em',
    });

    const handleClick = () =>
        document.body.scroll({ top: 0, left: 0, behavior: 'smooth' });

    return (
        <animated.div
            className='top'
            style={circleSpring}
            onClick={() => handleClick()}>
            <Label color='black' circular>
                <Icon name='arrow up' />
            </Label>
        </animated.div>
    );
};

export { Top };
