import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/marketingApp';

export const MarketingApp = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        if (ref) {
            const { onParentNavigate } = mount(ref.current, {
                onNavigate: ({ pathname: nextPathname}) => {
                    const { pathname } = history.location;
                    if (pathname !== nextPathname) {
                        history.push(nextPathname);
                    }
                }
            });

            history.listen(onParentNavigate);
        }
    }, []);

    return <div ref={ref}>
        </div>;
}
