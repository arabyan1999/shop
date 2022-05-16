import { useEffect } from 'react';

function scrollingElement() {
    return document.scrollingElement || document.documentElement;
}

export  function useScrollingElement(trigger) {
    useEffect(() => {
        if (trigger) {
            scrollingElement().style.overflow = 'hidden';
        } else {
            scrollingElement().style.overflow = 'auto';
        }
    }, [trigger]);
}