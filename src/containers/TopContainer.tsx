import React, { useContext } from 'react';
import { RouterStore } from '../stores/RouterStore';
import { useScroll } from '../utils/scrollHook';
import { Top } from '../components/top/Top';

const TopContainer = () => {
    const routerContext = useContext(RouterStore.Context);

    const scrollPosition = useScroll();

    const trigger = () =>
        scrollPosition >
        Math.floor(routerContext.footerScrollTop + routerContext.footerHeight) -
            1;

    return <Top visibility={trigger()} />;
};

export { TopContainer };
