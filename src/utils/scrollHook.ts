import { useState, useEffect } from 'react';

export const useScroll = (): number => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const body = document.body;

        const handleScroll = () => {
            setPosition(body.scrollTop);
        };

        body.addEventListener('scroll', handleScroll);
        return () => {
            body.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return position;
};
