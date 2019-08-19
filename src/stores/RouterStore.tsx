import React, { useState, ReactNode } from 'react';

const RouterContext = React.createContext({
    footerHeight: 0,
    setFooterHeight: (_: number) => {},

    footerScrollTop: 0,
    setFooterScrollTop: (_: number) => {},
});

const RouterStore = (props: { children?: ReactNode }) => {
    const [footerHeight, _setFooterHeight] = useState(0);
    const setFooterHeight = (value: number) => _setFooterHeight(value);

    const [footerScrollTop, _setFooterScrollTop] = useState(0);
    const setFooterScrollTop = (value: number) => _setFooterScrollTop(value);

    return (
        <RouterContext.Provider
            value={{
                footerHeight,
                footerScrollTop,
                setFooterHeight,
                setFooterScrollTop,
            }}>
            {props.children}
        </RouterContext.Provider>
    );
};

RouterStore.Context = RouterContext;
export { RouterStore };
