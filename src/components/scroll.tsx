import React from 'react';
import _ from "lodash";

export const ScrollEventProvider: React.FC<{
    listener: any,
    target: any,
    onScrollBottom: () => Promise<any>
}> = ({ listener, target, onScrollBottom, children }) => {
    //const [event, setEvent] = React.useState(undefined);
    const [isWaiting, setWaiting] = React.useState(false);
    const [isBottom, setState] = React.useState(false);
    const checkIsBottom = (el: any) => {
        //event.target.scrollHeight - event.target.scrollTop == event.target.clientHeight
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    const onScrollDebounce = React.useCallback(_.debounce((ev) => {
        if (isWaiting == false && isBottom == false && checkIsBottom(target)) {
            setWaiting(true)
            setState(true);
            console.log("Bottom of page");
            onScrollBottom().finally(() => setWaiting(false));
            return;
        }
        if (isBottom == true) {
            setState(false);
            console.log("Not at bottom of page");
        }
    }, 50), []);
    React.useEffect(() => {
        listener.addEventListener('scroll', onScrollDebounce)
        return () => {
            console.log("[ScrollEventProvider] unhook");
            listener.removeEventListener('scroll', onScrollDebounce);
        }
    }, [listener]);
    console.log("[ScrollEventProvider] construct");
    return <>{children}</>;
}