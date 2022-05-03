import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/marketingApp';

export const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref) {
            mount(ref.current);
        }
    }, []);

    return <div ref={ref}>
        </div>;
}
