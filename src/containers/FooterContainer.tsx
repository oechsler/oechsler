import React, { useContext, useRef, useEffect } from 'react';
import { Footer } from '../components/footer/Footer';
import { RouterStore } from '../stores/RouterStore';
import { isNullOrUndefined } from 'util';

const FooterContainer = () => {
    const routerContext = useContext(RouterStore.Context);

    const element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const elem = element.current;
        if (isNullOrUndefined(elem)) return;

        // Pass values to the Routers context
        routerContext.setFooterHeight(elem.clientHeight);
        routerContext.setFooterScrollTop(
            elem.getBoundingClientRect().top - window.innerHeight,
        );
    }, []);

    return <Footer inverted element={element} />;
};

export { FooterContainer };
