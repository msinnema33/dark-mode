import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode');
    // const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;
    useEffect (
        () => {
            const className = 'dark-mode';
            const element = window.document.body;
            if (enabled) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        }, [enabled]
    );


    return [enabled. setEnabledState];
}

export default useDarkMode;