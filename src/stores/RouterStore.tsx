import React, { useState, ReactNode } from 'react';

const RouterContext = React.createContext({
    footerHeight: 0,
    setFooterHeight: (_: number) => {},
});

const RouterStore = (props: { children?: ReactNode }) => {
    const [footerHeight, _setFooterHeight] = useState(0);
    const setFooterHeight = (value: number) => _setFooterHeight(value);

    return (
        <RouterContext.Provider value={{ footerHeight, setFooterHeight }}>
            {props.children}
        </RouterContext.Provider>
    );
};

RouterStore.Context = RouterContext;
export { RouterStore };
